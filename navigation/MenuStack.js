import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MenuHomeScreen from '../screens/Menu/MenuHomeScreen'
import AddSectionScreen from '../screens/Menu/AddSectionScreen'
import AddItemScreen from '../screens/Menu/AddItemScreen'
import EditSectionScreen from '../screens/Menu/EditSectionScreen'
import EditItemScreen from '../screens/Menu/EditItemScreen'

const Menu = createNativeStackNavigator()

const MenuStack = () => (
  <Menu.Navigator initialRouteName='MenuHome'>
    <Menu.Screen name='MenuHome' component={MenuHomeScreen} />
    <Menu.Screen name='AddSection' component={AddSectionScreen} />
    <Menu.Screen name='AddItem' component={AddItemScreen} />
    <Menu.Screen name='EditSection' component={EditSectionScreen} />
    <Menu.Screen name='EditItem' component={EditItemScreen} />
  </Menu.Navigator>
)

export default MenuStack