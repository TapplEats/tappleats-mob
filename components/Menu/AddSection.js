import React, { useState } from 'react'
import { View } from 'react-native'
import { Switch, Title } from 'react-native-paper'

// import FormElement from '../UI/FormElement'

// import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'
// import { generateRandomString } from '../../utilities/utils'

// import Firebase from '../../config/firebase'
// import { createUserMenu, addSection } from '../../API/menu'

// const auth = Firebase.auth()

const AddSection = ({ userId }) => {

  console.log(userId);

  // const initialSectionInfoFormState = {
  //   title: createFormElementObj('input', 'Title*',
  //     {
  //       type: 'text', name: 'title', placeholder: 'Title*',
  //     }, '', null, { required: true }, false,
  //     ),
  //   description: createFormElementObj('textarea', 'Description',
  //     {
  //       type: 'text', name: 'description', placeholder: 'Description',
  //     }, '', null, { required: false }, true,
  //     ),
  //   note: createFormElementObj('input', 'Note',
  //     {
  //       type: 'text', name: 'note', placeholder: 'Note',
  //     }, '', null, { required: false }, true,
  //     ),
  // }

  // const [loadingDone, setLoadingDone] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [formValid, setFormValid] = useState(false)
  // const [formTouched, setFormTouched] = useState(false)
  // const [formSaved, setFormSaved] = useState(false)
  // const [sectionInfoForm, setSectionInfoForm] = useState({ ...initialSectionInfoFormState })
  const [sectionActive, setSectionActive] = useState(true)

  // const inputChangeHandler = async (eve, key) => {
  //   let changeEvent
  //   let e = eve
  //   if (!e) {
  //     e = ''
  //   }

  //   if (Array.isArray(e)) {
  //     changeEvent = e.join()
  //   } else if (Number.isInteger(e)) {
  //     changeEvent = String(e)
  //   } else {
  //     changeEvent = e
  //   }

  //   const adjustedInfoForm = adjustFormValues(sectionInfoForm, changeEvent, key)
  //   setSectionInfoForm(adjustedInfoForm.adjustedForm)
  //   setFormValid(adjustedInfoForm.formValid)
  //   setFormTouched(true)
  //   setFormSaved(false)
  // }

  // const loadTabForm = formElements => {
  //   const form = Object.keys(formElements).map((formEl, i) => (
  //     <FormElement
  //       elementType={formElements[formEl].elementType}
  //       label={formElements[formEl].elementLabel}
  //       value={formElements[formEl].value}
  //       elementOptions={formElements[formEl].elementOptions}
  //       touched={formElements[formEl].touched}
  //       valid={formElements[formEl].isValid}
  //       // shouldValidate={formElements[formEl].validtationRules}
  //       elementSetup={formElements[formEl].elementSetup}
  //       errorMessage={formElements[formEl].errorMessage}
  //       changed={e => inputChangeHandler(e, formEl)}
  //       // grid={formElements[formEl].grid}
  //       disabled={loading}
  //       key={formEl + i}
  //     />
  //   ))

  //   return form
  // }

  // const clearFields = () => {
  //   setSectionInfoForm({ ...initialSectionInfoFormState })
  //   setSectionActive(true)
  //   setFormTouched(false)
  //   setFormSaved(true)
  // }

  // const addSectionHandler = async e => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setLoadingDone(false)
  //   const sectionInfoDetails = createFormValuesObj(sectionInfoForm)
  //   const sectionDetails = {
  //     ...sectionInfoDetails,
  //   }
  //   try {
  //     sectionDetails.type = 'container'
  //     sectionDetails.active = sectionActive
  //     sectionDetails.originallyActive = sectionActive
  //     sectionDetails.addedOn = new Date()
  //     sectionDetails.id = generateRandomString()
  //     if (!menuData.userId) {
  //       await createUserMenu({ sections: [sectionDetails] }, userId, auth.userUrlSuffix)
  //     }
  //     if (menuData.sections) {
  //       await addSection(userId, sectionDetails)
  //     }
  //     onAddMenuSection(sectionDetails)
  //     setLoadingDone(true)
  //     setTimeout(() => setLoading(false), 1000)
  //     setTimeout(() => closeDialog(), 1100)
  //   } catch (err) {
  //     setLoadingDone(true)
  //     setLoading(false)
  //     clearFields()
  //     throw new Error(err)
  //   }
  // }

  const toggleSectionActive = () => {
    setSectionActive(prevState => !prevState)
    // setFormTouched(true)
  }

  // const buttonDisabled = formSaved || (formTouched && !formValid) || !formTouched || loading

  return (
    <View>
      <Title>Active</Title>
      <Switch
        onValueChange={() => toggleSectionActive()}
        value={sectionActive}
        disabled={loading}
      />
    </View>
  )
}

export default AddSection
