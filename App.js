import React, { useState, useEffect } from 'react'
// import { StatusBar } from "expo-status-bar"
import { Provider as PaperProvider } from 'react-native-paper'
// import { StyleSheet, Text, View, Button } from "react-native"

import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  createStore, applyMiddleware, combineReducers,
} from 'redux'

import * as WebBrowser from 'expo-web-browser'

import notificationReducer from './store/reducers/notification'
import cardReducer from './store/reducers/cards'

// import Routes from "./navigation"
import RootStack from './navigation/RootStack'

import ProvideAuth from './hooks/use-auth'
import ProvideLanguage from './hooks/useLang'

const rootReducer = combineReducers({
  notification: notificationReducer,
  cards: cardReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk),
)

WebBrowser.maybeCompleteAuthSession()

export default function App() {
  
  return (
    <Provider store={store}>
      <ProvideAuth>
        <ProvideLanguage>
          <PaperProvider>
            <RootStack />
          </PaperProvider>
        </ProvideLanguage>
      </ProvideAuth>
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// })
