import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Google from 'expo-auth-session/providers/google'

import { Button, InputField, ErrorMessage } from '../components'
import firebase from 'firebase/app'
import Firebase from '../config/firebase'

const auth = Firebase.auth()

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const [rightIcon, setRightIcon] = useState('eye')
  const [loginError, setLoginError] = useState('')

  // change clientId with muvrai firebase console --> auth --> signin method --> google --> web sdk config --> web client Id
  // you also need to go to this link https://console.cloud.google.com/apis/credentials/oauthclient/{clientId} and
  // add https://auth.expo.io & https://localhost:19006 to Authorized JavaScript origins URIs and
  // add https://localhost:19006 & https://auth.expo.io/@your_username/your_project-slug to Authorized redirect URIs
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "451722526570-baict6n295kler04ed5p46ail7bap3d8.apps.googleusercontent.com",
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
      console.log(credential)
      // console.log(auth)
      firebase.auth().signInWithCredential(credential)
    }
  }, [response])

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility)
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility)
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password)
      }
    } catch (error) {
      setLoginError(error.message)
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Login</Text>
      <InputField
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
      />
      <InputField
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
      />
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
      <Button
        onPress={onLogin}
        backgroundColor='#f57c00'
        title='Login'
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
