import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ProfileStack from '../../navigation/ProfileStack'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <ProfileStack />
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
})