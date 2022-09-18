import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { View, ActivityIndicator } from 'react-native'

// import Firebase from '../config/firebase'
// import { AuthenticatedUserContext } from './AuthenticatedUserProvider'
import { useAuth } from '../hooks/use-auth'

import AuthStack from './AuthStack'
import SideDrawerStack from './SideDrawerStack'
// import HomeStack from './HomeStack'

// const auth = Firebase.auth()

const Root = createNativeStackNavigator()

const RootStack = () => {
  const { user } = useAuth()
  // const { user, setUser } = useContext(AuthenticatedUserContext)
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   // onAuthStateChanged returns an unsubscriber
  //   const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
  //     try {
  //       await (authenticatedUser ? setUser(authenticatedUser) : setUser(null))
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   });

  //   // unsubscribe auth listener on unmount
  //   return unsubscribeAuth
  // }, [])

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   )
  // }

  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none">
        {user ? (
          <Root.Screen
            name="App"
            component={SideDrawerStack}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <Root.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </Root.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   {user ? <SideDrawerStack /> : <AuthStack />}
    // </NavigationContainer>
  )
}

export default RootStack