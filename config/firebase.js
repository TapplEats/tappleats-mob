import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import Constants from 'expo-constants'

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

const Firebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const getFirestoreInstance = async () => {
  if (!Firebase.firestore) {
    await import("firebase/firestore")
  }
  return Firebase.firestore()
}

export const getFirebaseStorage = () => Firebase.storage()

export default Firebase

// let Firebase

// if (firebase.apps.length === 0) {
//   Firebase = firebase.initializeApp(firebaseConfig)
// } 

// export default Firebase

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/storage";
// import * as vars from "../app/utilities/appVars";

// export const firebaseApp = !firebase.apps.length
//   ? firebase.initializeApp(vars.FIREBASE_CONFIG)
//   : firebase.app();

// export const getFirestoreInstance = async () => {
//   if (!firebaseApp.firestore) {
//     await import("firebase/firestore");
//   }

//   return firebaseApp.firestore();
// };

// export const getFirebaseAuth = async () => {
//   if (!firebaseApp.auth) {
//     await import("firebase/auth");
//   }

//   return firebaseApp.auth();
// };

// export const getFirebaseFunctions = async () => {
//   if (!firebaseApp.functions) {
//     await import("firebase/functions");
//   }

//   return firebaseApp.functions();
// };

// export const getFirebaseStorage = () => firebaseApp.storage();
