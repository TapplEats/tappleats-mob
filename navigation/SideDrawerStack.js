import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawerContent from '../components/SideDrawer/CustomDrawerContent'
import { drawerItems } from '../utilities/appVars'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import InfoScreen from '../screens/Profile/InfoScreen'
import BioScreen from '../screens/Profile/BioScreen'
import PictureScreen from '../screens/Profile/PictureScreen'
import MenuScreen from '../screens/Menu/MenuScreen'
// import MenuStack from './MenuStack'

const SideDrawer = createDrawerNavigator()

const SideDrawerStack = () => (
  <SideDrawer.Navigator
    drawerContent={props => (
      <CustomDrawerContent drawerItems={drawerItems} {...props} />
    )}
  >
    <SideDrawer.Screen name="Profile" component={ProfileScreen} />
    <SideDrawer.Screen name="Info" component={InfoScreen} />
    <SideDrawer.Screen name="Bio" component={BioScreen} />
    <SideDrawer.Screen name="Picture" component={PictureScreen} />
    <SideDrawer.Screen name="Menu" component={MenuScreen} />
  </SideDrawer.Navigator>
)

export default SideDrawerStack