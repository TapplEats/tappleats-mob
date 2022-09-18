import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useAuth } from '../../hooks/use-auth'

import MenuStack from '../../navigation/MenuStack'

export default function MenuScreen() {
  const { user } = useAuth()
  // const handleSignOut = async () => {
  //   try {
  //     await auth.signOut();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  console.log(user)

  return (
    <View style={styles.container}>
      <MenuStack />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
