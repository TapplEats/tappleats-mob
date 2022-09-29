import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, Button as RNButton, ActivityIndicator } from 'react-native'

import FormElement from '../../components/UI/FormElement'
import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'

import { getCardById, updateCard } from '../../API/cards'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'

import * as actions from '../../store/actions'

const BioScreen = ({
  cardData, onSetNotification, onLoadCardByUserId, onUpdateCard,
}) => {
  const auth = useAuth()
  const language = useLanguage()

  const userId = auth.user.uid
  const pageStatics = language.languageVars.pages.editProfile
  const isMaster = auth.accountType === 'master'
  const isTheLoggedinUser = cardData.urlSuffix === auth.userUrlSuffix

  const [formValid, setFormValid] = useState(false)
  const [formTouched, setFormTouched] = useState(false)
  const [formSaved, setFormSaved] = useState(false)
  const [profileData, setProfileData] = useState(cardData || null)
  const [loading, setLoading] = useState(false)

  const [bioForm, setBioForm] = useState({
    bioVideo: createFormElementObj('video', 'Video Url',
      { type: 'text', name: 'email', placeholder: 'Video Url' },
      cardData.userId && cardData.bioVideo ? cardData.bioVideo : '',
      null,
      { required: false },
      !!cardData.userId,
      ),
  })

  useEffect(() => {
    let mounted = true

    if ((mounted && !cardData.userId) || !isTheLoggedinUser) {
      (async () => {
        setLoading(true)
        const data = await getCardById(userId)
        await onLoadCardByUserId(userId)
        setProfileData(data)
        const adjustedBioForm = adjustFormValues(bioForm, data, null)

        setBioForm(prevForm => ({ ...prevForm, ...adjustedBioForm.adjustedForm }))
        setFormValid(adjustedBioForm.formValid)
        // setLoadingDone(true)
        setTimeout(() => setLoading(false), 1000)
        // setLoading(false)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, onLoadCardByUserId, isTheLoggedinUser])

  // const timer = ms => new Promise(res => setTimeout(res, ms))

  const updateBioHandler = async () => {
    // e.preventDefault()
    // setLoadingDone(false)
    setLoading(true)
    const data = { ...cardData }
    const bioFormDetails = createFormValuesObj(bioForm)
    const cardDetails = {
      ...data,
      ...bioFormDetails,
    }
    if (isMaster) {
      cardDetails.teamData = {
        ...data.teamData,
        ...bioFormDetails,
      }
    }
    try {
      // setLoadingMessage(pageStatics.messages.loading.updatingVcard)
      await updateCard(userId, cardDetails)
      await onUpdateCard({ ...bioFormDetails, ...(isMaster && { teamData: cardDetails.teamData || null }) })

      // setLoadingDone(true)
      // await timer(1000)

      setFormSaved(true)
      setFormTouched(false)
      setTimeout(() => setLoading(false), 1000)
      // setLoading(false)

      onSetNotification({
        message: pageStatics.messages.notifications.profileBioUpdateSuccess,
        type: 'success',
      })
    } catch (err) {
      setLoading(false)
      onSetNotification({
        message: pageStatics.messages.notifications.profileBioUpdateError,
        type: 'error',
      })
    }
  }

  const inputChangeHandler = async (eve, key) => {
    let changeEvent
    let e = eve
    if (!e) {
      e = ''
    }
    if (Array.isArray(e)) {
      changeEvent = e.join()
    } else if (Number.isInteger(e)) {
      changeEvent = String(e)
    } else {
      changeEvent = e
    }

    const adjustedcontactForm = adjustFormValues(bioForm, changeEvent, key)
    setBioForm(adjustedcontactForm.adjustedForm)
    setFormValid(adjustedcontactForm.formValid)
    setFormTouched(true)
    setFormSaved(false)
  }

  const loadTabFormContent = formElements => Object.keys(formElements).map((formEl, i) => (
    <FormElement
      elementType={formElements[formEl].elementType}
      label={formElements[formEl].elementLabel}
      value={formElements[formEl].value}
      elementOptions={formElements[formEl].elementOptions}
      touched={formElements[formEl].touched}
      valid={formElements[formEl].isValid}
      errorMessage={formElements[formEl].errorMessage}
      shouldValidate={formElements[formEl].validtationRules}
      elementSetup={formElements[formEl].elementSetup}
      changed={e => inputChangeHandler(e, formEl)}
      // grid={formElements[formEl].grid}
      disabled={loading}
      key={formEl + i}
    />
  ))

  const buttonDisabled = formSaved || (formTouched && !formValid) || !formTouched || loading

  // if (loading) {
  //   return <ActivityIndicator />
  // }

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>Bio Screen</Text>
          <View>
            <Text>{profileData && profileData.bioVideo ? pageStatics.data.titles.currentVideo : pageStatics.data.titles.addVideo}</Text>
            {loadTabFormContent(bioForm)}
          </View>
          <RNButton
            disabled={buttonDisabled}
            onPress={() => updateBioHandler()}
            title={pageStatics.buttons.updateBio}
          />
        </View>
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  cardData: state.cards,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onLoadCardByUserId: userId => dispatch(actions.loadCardByUserId(userId)),
  onUpdateCard: newData => dispatch(actions.updateCard(newData)),
})

BioScreen.defaultProps = {
  cardData: null,
}

BioScreen.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onSetNotification: PropTypes.func.isRequired,
  onLoadCardByUserId: PropTypes.func.isRequired,
  // switchTheme: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(BioScreen)
