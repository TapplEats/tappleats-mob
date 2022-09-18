import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
// import SignupScreen from '../screens/SignupScreen'

const Auth = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Auth.Navigator headerMode='none'>
      <Auth.Screen name='Login' component={LoginScreen} />
      {/* <Stack.Screen name='Signup' component={SignupScreen} /> */}
    </Auth.Navigator>
  )
}