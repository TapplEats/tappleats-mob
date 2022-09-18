import React from 'react'
import { Text, View, Button as RNButton } from 'react-native'

const MenuHomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Menu Home Screen</Text>
      <View>
        <RNButton
          onPress={() => navigation.navigate('AddSection')}
          title='Add Section'
          color='#000'
        />
        <RNButton
          onPress={() => navigation.navigate('AddItem')}
          title='Add Item'
          color='#000'
        />
        <RNButton
          onPress={() => navigation.navigate('EditSection')}
          title='Edit Section'
          color='#000'
        />
        <RNButton
          onPress={() => navigation.navigate('EditItem')}
          title='Edit Item'
          color='#000'
        />
      </View>
    </View>
  )
}

export default MenuHomeScreen