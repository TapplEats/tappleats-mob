import React from 'react'
import { Text, View, Button as RNButton } from 'react-native'

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <View>
        <RNButton
          onPress={() => navigation.navigate('Info')}
          title='Go TO INFO'
          color='#000'
        />
        <RNButton
          onPress={() => navigation.navigate('Bio')}
          title='Go TO BIO'
          color='#000'
        />
        <RNButton
          onPress={() => navigation.navigate('Picture')}
          title='Go TO PICTURE'
          color='#000'
        />
      </View>
    </View>
  )
}

export default DashboardScreen