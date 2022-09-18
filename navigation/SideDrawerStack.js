import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ProfileScreen from '../screens/Profile/ProfileScreen'
import MenuScreen from '../screens/Menu/MenuScreen'
// import MenuStack from './MenuStack'

const SideDrawer = createDrawerNavigator()

const SideDrawerStack = () => (
  <SideDrawer.Navigator>
    <SideDrawer.Screen name="Profile" component={ProfileScreen} />
    <SideDrawer.Screen name="Menu" component={MenuScreen} />
  </SideDrawer.Navigator>
)

export default SideDrawerStack