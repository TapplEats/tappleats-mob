import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import * as Google from 'expo-auth-session/providers/google'

import { Button, InputField, ErrorMessage } from '../components'
import firebase from 'firebase/app'
// import Firebase from '../config/firebase'
import { updateLoginDates } from '../API/users'

import { useAuth } from '../hooks/use-auth'
import { useLanguage } from '../hooks/useLang'

import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../utilities/form'

import FormElement from '../components/UI/FormElement'

// const auth = Firebase.auth()

const LoginScreen = ({ navigation, onSetNotification }) => {
  const auth = useAuth()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.auth

  const initialLoginFormState = {
    email: createFormElementObj('input', pageStatics.forms.loginEmail,
      {
        type: 'email',
        name: 'email',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        placeholder: pageStatics.forms.loginEmail
      },
      '',
      { leftIcon: 'email', iconColor: '#000' },
      { required: true, email: true }, false,
      ),
    password: createFormElementObj('input', pageStatics.forms.loginPassword,
    {
      type: 'password',
      name: 'password',
      autoCapitalize: 'none',
      placeholder: pageStatics.forms.loginPassword
    },
    '',
    { leftIcon: 'lock', rightIcon: true, iconColor: '#000'},
    { required: true }, false,
    ),
  }

  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)
  const [userFormValid, setUserFormValid] = useState(false)
  const [userForm, setUserForm] = useState({ ...initialLoginFormState })

  // change clientId with muvrai firebase console --> auth --> signin method --> google --> web sdk config --> web client Id
  // you also need to go to this link https://console.cloud.google.com/apis/credentials/oauthclient/{clientId} and
  // add https://auth.expo.io & https://localhost:19006 to Authorized JavaScript origins URIs and
  // add https://localhost:19006 & https://auth.expo.io/@your_username/your_project-slug to Authorized redirect URIs
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "451722526570-baict6n295kler04ed5p46ail7bap3d8.apps.googleusercontent.com",
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      (async () => {
        try {
          if (auth.authStatus === 'loggedin' && auth.user && auth.userExist) {
            setLoading(true)
            await updateLoginDates(auth.user.uid)
            // if (!auth.isSubscriber) {
            //   history.push('/subscribe')
            // }
            if (auth.userExist && auth.isSubscriber) {
              // history.push(`/profile/${auth.userUrlSuffix}`)
              navigation.navigate('Profile')
            }
          }
        } catch (err) {
          onSetNotification({
            message: pageStatics.messages.notifications.loginFail,
            type: 'error',
          })
        }
      })()
    }
    return () => { mounted = false }
  }, [
    auth.authStatus,
    auth.isSubscriber,
    auth.user,
    auth.userExist,
    auth.userUrlSuffix,
    // history,
    onSetNotification,
    pageStatics.messages.notifications.loginFail,
  ])

  useEffect(() => {
    if (response?.type === 'success') {
      setLoading(true)
      const { id_token } = response.params
      
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
      console.log(credential)
      // console.log(auth)
      firebase.auth().signInWithCredential(credential)
      setTimeout(() => setLoading(false), 1000)
    }
  }, [response])

  const inputChangeHandler = (e, key) => {
    let changeEvent

    if (Array.isArray(e)) {
      changeEvent = e.join()
    } else if (Number.isInteger(e)) {
      changeEvent = String(e)
    } else {
      changeEvent = e
    }
    const adjustedUserForm = adjustFormValues(userForm, changeEvent, key)
    setUserForm(adjustedUserForm.adjustedForm)
    setUserFormValid(adjustedUserForm.formValid)
  }

  const loadForm = form => Object.keys(form).map((formEl, i) => (
      <FormElement
        elementType={form[formEl].elementType}
        label={form[formEl].elementLabel}
        value={form[formEl].value}
        elementOptions={form[formEl].elementOptions}
        touched={form[formEl].touched}
        valid={form[formEl].isValid}
        shouldValidate={form[formEl].validtationRules}
        elementSetup={form[formEl].elementSetup}
        changed={e => inputChangeHandler(e, formEl)}
        disabled={form[formEl].disabled}
        errorMessage={form[formEl].errorMessage}
        key={formEl + i}
      />
    ))

  const loginHandler = async () => {
    setLoading(true)
    const userFormDetails = createFormValuesObj(userForm)
    
    try {
      if (userFormDetails.email !== '' && userFormDetails.password !== '') {
        await firebase.auth().signInWithEmailAndPassword(userFormDetails.email, userFormDetails.password)
      }
      setTimeout(() => setLoading(false), 1000)
      // setLoading(false)
    } catch (error) {
      onSetNotification({
        message: pageStatics.messages.notifications.loginFail,
        type: 'error',
      })
      setLoginError(error.message)
      setLoading(false)
    }
  }

  const buttonDisabled = !userFormValid || loading

  // if (loading) {
  //   return <ActivityIndicator />
  // }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <StatusBar style='dark-content' />
          <Text style={styles.title}>Login</Text>
          {loadForm(userForm)}
          
          {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
          <Button
            onPress={loginHandler}
            disabled={buttonDisabled}
            backgroundColor='#f57c00'
            title='Login with Email'
            tileColor='#fff'
            titleSize={20}
            containerStyle={{
              marginBottom: 24
            }}
          />
          <Button
            disabled={!request}
            title="Login With Google"
            onPress={() => promptAsync()}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e93b81',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  }
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

export default connect(null, mapDispatchToProps)(LoginScreen)

{/* <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='email'
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      /> */}
      {/* <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='lock'
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      /> */}