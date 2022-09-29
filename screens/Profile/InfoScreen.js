import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, Button as RNButton, ActivityIndicator } from 'react-native'

import { getCardById, updateCard } from '../../API/cards'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'

import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'

import FormElement from '../../components/UI/FormElement'

import * as actions from '../../store/actions'

const InfoScreen = ({ cardData, onSetNotification, onLoadCardByUserId, onUpdateCard }) => {
  const auth = useAuth()
  const language = useLanguage()

  const userId = auth.user.uid
  const pageStatics = language.languageVars.pages.editProfile
  const isMaster = auth.accountType === 'master'
  const isTheLoggedinUser = cardData.urlSuffix === auth.userUrlSuffix

  const [formValid, setFormValid] = useState(false)
  const [formTouched, setFormTouched] = useState(false)
  const [formSaved, setFormSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const [infoForm, setInfoForm] = useState({
    restaurantName: createFormElementObj('input', pageStatics.forms.infoTab.restaurantName,
      { type: 'text', name: 'restaurantName', placeholder: pageStatics.forms.infoTab.restaurantName },
      cardData.userId && cardData.restaurantName ? cardData.restaurantName : '',
      null,
      { required: true },
      !!cardData.userId,
      ),
    note: createFormElementObj('textarea', pageStatics.forms.infoTab.note,
      { type: 'text', name: 'note', placeholder: pageStatics.forms.infoTab.note },
      cardData.userId && cardData.note ? cardData.note : '',
      null,
      { required: false },
      !!cardData.userId,
      ),
    email: createFormElementObj('input', pageStatics.forms.contactTab.email,
      { type: 'text', name: 'email', placeholder: pageStatics.forms.contactTab.email },
      cardData.userId && cardData.email ? cardData.email : '',
      null,
      { required: false },
      !!cardData.userId,
      ),
    workPhone: createFormElementObj('input', pageStatics.forms.contactTab.workPhone,
      { type: 'tel', name: 'workPhone', placeholder: pageStatics.forms.contactTab.workPhone },
      cardData.userId && cardData.workPhone ? cardData.workPhone : '',
      null,
      { required: false, onlyNumber: true },
      !!cardData.userId,
      ),
    address: createFormElementObj('input', pageStatics.forms.contactTab.address,
      { type: 'text', name: 'address', placeholder: pageStatics.forms.contactTab.address },
      cardData.userId && cardData.address ? cardData.address : '',
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
        // setProfileData(data)
        const adjustedInfoForm = adjustFormValues(infoForm, data, null)
        // if (data.vCardFile) {
        //   setExistingVcard(data.vCardFile)
        // }
        setInfoForm(prevForm => ({ ...prevForm, ...adjustedInfoForm.adjustedForm }))
        setFormValid(adjustedInfoForm.formValid)
        // setNewVcardName(`${language.languageVars.appNameCAPS}_${data.urlSuffix}.vcf`)
        // setLoadingDone(true)
        setTimeout(() => setLoading(false), 1000)
        // setLoading(false)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, onLoadCardByUserId, isTheLoggedinUser])

  const updateInfoHandler = async () => {
    // e.preventDefault()
    // setLoadingDone(false)
    setLoading(true)
    const data = { ...cardData }
    const infoFormDetails = createFormValuesObj(infoForm)
    const cardDetails = {
      ...cardData,
      ...infoFormDetails,
    }
    if (isMaster) {
      cardDetails.teamData = {
        ...data.teamData,
        organization: infoFormDetails.organization,
        career: infoFormDetails.career,
      }
    }
    try {
      // setLoadingMessage(pageStatics.messages.loading.updatingVcard)
      await updateCard(userId, cardDetails)
      await onUpdateCard({ ...infoFormDetails, ...(isMaster && { teamData: cardDetails.teamData || null }) })

      // setLoadingDone(true)
      // await timer(1000)

      setFormSaved(true)
      setFormTouched(false)

      setTimeout(() => setLoading(false), 1000)
      // setLoading(false)
      onSetNotification({
        message: pageStatics.messages.notifications.profileInfoUpdateSuccess,
        type: 'success',
      })
    } catch (err) {
      setLoading(false)
      onSetNotification({
        message: pageStatics.messages.notifications.profileInfoUpdateError,
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

    const adjustedInfoForm = adjustFormValues(infoForm, changeEvent, key)
    setInfoForm(adjustedInfoForm.adjustedForm)
    setFormValid(adjustedInfoForm.formValid)
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
          <Text>Info Screen</Text>
          {loadTabFormContent(infoForm)}
          <RNButton
            disabled={buttonDisabled}
            onPress={() => updateInfoHandler()}
            title={pageStatics.buttons.updateInfo}
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

InfoScreen.defaultProps = {
  cardData: null,
}

InfoScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)