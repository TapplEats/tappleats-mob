import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import ProfileScreen from '../screens/Profile/ProfileScreen'
import DashboardScreen from '../screens/Profile/DashboardScreen'
import InfoScreen from '../screens/Profile/InfoScreen'
import BioScreen from '../screens/Profile/BioScreen'
import PictureScreen from '../screens/Profile/PictureScreen'

const Profile = createNativeStackNavigator()

const ProfileStack = () => (
  <Profile.Navigator initialRouteName='Dashboard'>
    <Profile.Screen name='Dashboard' component={DashboardScreen} />
    <Profile.Screen name='Info' component={InfoScreen} />
    <Profile.Screen name='Bio' component={BioScreen} />
    <Profile.Screen name='Picture' component={PictureScreen} />
  </Profile.Navigator>
)

export default ProfileStack