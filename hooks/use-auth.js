import React, {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'

import { connect } from 'react-redux'

import { ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import firebase from 'firebase/app'
import Firebase from '../config/firebase'

import * as actions from '../store/actions'

import { getCardById } from '../API/cards'
import { createUser, getUserById } from '../API/users'

// import { defaultSettings } from '../utilities/appVars'
import { createUrlSuffix, generateRandomString } from '../utilities/utils'

const authContext = createContext()

export const useAuth = () => useContext(authContext)

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const [userExist, setUserExist] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifyEmailSent, setVerifyEmailSent] = useState(false)
  const [authStatus, setAuthStatus] = useState('starting')
  const [adminStatus, setAdminStatus] = useState(false)
  const [superAdminStatus, setSuperAdminStatus] = useState(false)
  const [isSubscriber, setIsSubscriber] = useState(false)
  const [isBoarded, setIsBoarded] = useState(false)
  const [subscriberStatus, setSubscriberStatus] = useState(false)
  const [subscriberData, setSubscriberData] = useState(false)
  const [loginError, setLoginerror] = useState(null)
  const [userUrlSuffix, setUserUrlSuffix] = useState(null)
  const [welcomeEmailSent, setWelcomeEmailSent] = useState(false)
  const [accountSecret, setAccountSecret] = useState(null)
  const [isProfileActive, setIsProfileActive] = useState(true)
  const [createdOn, setCreatedOn] = useState(null)
  const [isAdminCreated, setIsAdminCreated] = useState(false)

  const authenticate = () => Firebase.auth().onAuthStateChanged(authUser => {
    if (authUser) {
      setUser(authUser)
      return authUser
    }

    return false
  })

  const logout = () => Firebase.auth().signOut().then(() => {
    setUser(null)
    setAuthStatus('failed')
    setUserExist(true)
    setAdminStatus(false)
    setSuperAdminStatus(false)
  })

  const confirmLogin = () => {
    setEmailVerified(true)
    setAuthStatus('loggedin')
  }

  const resendVerificationEmail = () => {
    Firebase.auth().onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          await authUser.sendEmailVerification()
          setVerifyEmailSent(false)
        } catch (err) {
          throw new Error(err.message)
        }
      }
    })
  }

  const refreshToken = async () => {
    try {
      await Firebase.auth().currentUser.getIdToken(true)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const resetPassword = async email => {
    try {
      await Firebase.auth().sendPasswordResetEmail(email)
    } catch (err) {
      throw new Error(err)
    }
  }

  const confirmPasswordReset = async (code, password) => {
    try {
      await Firebase.auth().confirmPasswordReset(code, password)
      return { status: 'success' }
    } catch (err) {
      return { status: 'failure', error: err.code }
    }
  }

  const resetEmail = async email => {
    const reqUser = Firebase.auth().currentUser
    try {
      await reqUser.updateEmail(email)
      await reqUser.sendEmailVerification()
    } catch (err) {
      if (err.code === 'auth/requires-recent-login') {
        alert('This operation is sensitive and requires recent authentication. Log out then log in again before retrying this request.')
      } else if (err.code === 'auth/email-already-in-use') {
        alert('The new email used is already linked to a different Tappl account. Please use a different email address.')
      }
      throw new Error(err)
    }
  }

  const reauthenticate = async currentPassword => {
    const { currentUser } = Firebase.auth()
    const cred = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword)
    const reAuthRes = user.reauthenticateWithCredential(cred)
    return reAuthRes
  }

  const changePassword = async (currentPassword, newPassword) => {
    const { currentUser } = Firebase.auth()
    try {
      await reauthenticate(currentPassword)
      await currentUser.updatePassword(newPassword)
      return { status: 'success' }
    } catch (err) {
      return { status: 'failure', error: err.code }
    }
  }

  const updatePassword = async password => {
    const { currentUser } = Firebase.auth()
    try {
      await currentUser.updatePassword(currentUser, password)
      return { status: 'success' }
    } catch (err) {
      return { status: 'failure', error: err.code }
    }
  }

  const changeEmail = async (currentPassword, newEmail) => {
    const { currentUser } = Firebase.auth()
    try {
      await reauthenticate(currentPassword)
      await currentUser.updateEmail(newEmail)
      return { status: 'success' }
    } catch (err) {
      return { status: 'failure', error: err.code }
    }
  }

  const getSignInMethods = async email => {
    const methodsArray = await Firebase.auth().fetchSignInMethodsForEmail(email)
    return methodsArray
  }

  useEffect(() => {
    setAuthStatus('processing')
    const unsubscribe = Firebase.auth().onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          const userCardExists = await getUserById(authUser.uid)
          let urlSuffix
          let generatedAccountSecret = null
          if (userCardExists) {
            const adminUser = userCardExists.method === 'admin'
            // const subscriber = await getSubscribedUser(authUser.uid)
            // if (subscriber) {
            //   setSubscriberStatus(subscriber[0].active)
            //   setSubscriberData(subscriber[0])
            // }
            if (adminUser) {
              setIsAdminCreated(true)
              setSubscriberStatus('active')
              setSubscriberData({
                role: 'subscriber',
                status: 'active',
              })
            }
            const userCard = await getCardById(authUser.uid)
            // const userColor = userCard.settings ? userCard.settings.selectedColor : defaultSettings.selectedColor
            generatedAccountSecret = userCard.accountSecret
            urlSuffix = userCard.urlSuffix
            setUserUrlSuffix(userCard.urlSuffix)
            setUserExist(true)
            setCreatedOn(userCardExists.created)
            setIsBoarded(userCardExists.boarded)
            // color.switchColor(userColor)
            // if (window.localStorage.getItem('mode')) {
            //   mode.toggleMode(window.localStorage.getItem('mode'))
            // } else {
            //   mode.toggleMode('edit')
            // }
          } else {
            const createdSuffix = await createUrlSuffix(authUser.displayName)
            generatedAccountSecret = generateRandomString(4)
            urlSuffix = `${createdSuffix.urlSuffix}`
            setUserUrlSuffix(urlSuffix)
            setUserExist(false)
          }
          await createUser(
            authUser.uid,
            authUser.email,
            authUser.displayName,
            urlSuffix,
            'invitation',
            '',
            '',
            '',
            '',
            new Date(),
            new Date(),
            null,
            generatedAccountSecret,
          )
          await firebase.auth().currentUser.getIdToken(true);
          const idToken = await authUser.getIdTokenResult()
          const tokenClaims = idToken.claims.claims
          const subscriberClaim = idToken.claims.stripeRole
          setIsSubscriber(!!(subscriberClaim && subscriberClaim === 'subscriber'))
          if (userCardExists && userCardExists.method === 'admin') {
            setIsSubscriber(true)
          }

          if (userCardExists && authUser.providerData[0].providerId === 'password' && !authUser.emailVerified) {
            setEmailVerified(false)
            setVerifyEmailSent(false)
          } else {
            setEmailVerified(true)
            setVerifyEmailSent(true)
          }

          setWelcomeEmailSent(false)
          setUser(authUser)
          setAdminStatus(tokenClaims ? tokenClaims.admin : false)
          setSuperAdminStatus(tokenClaims ? tokenClaims.superAdmin : false)
          setAuthStatus('prelogin')
          setTimeout(() => setAuthStatus('loggedin'), 1000)
          setAccountSecret(generatedAccountSecret || null)
          setIsProfileActive(userCardExists ? userCardExists.settings.active : true)
        } catch (err) {
          setLoginerror(err.message)
          setAuthStatus('failed')
          setUserUrlSuffix(null)
        }
      } else {
        setUser(null)
        // color.switchColor(defaultSettings.selectedColor)
        setAuthStatus('failed')
        setUserUrlSuffix(null)
      }
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    user,
    emailVerified,
    verifyEmailSent,
    authStatus,
    adminStatus,
    superAdminStatus,
    subscriberStatus,
    isSubscriber,
    isBoarded,
    loginError,
    authenticate,
    resendVerificationEmail,
    refreshToken,
    logout,
    confirmLogin,
    resetPassword,
    resetEmail,
    userUrlSuffix,
    userExist,
    welcomeEmailSent,
    changePassword,
    changeEmail,
    accountSecret,
    isProfileActive,
    createdOn,
    subscriberData,
    isAdminCreated,
    getSignInMethods,
    updatePassword,
    confirmPasswordReset,
  }
}

const ProvideAuth = ({ children, onSetNotification }) => {
  const auth = useProvideAuth()

  if (auth.authStatus === 'failed' && auth.loginError === 'Failed to get document because the client is offline.') {
    onSetNotification({
      message: 'Failed to load MuvRai because the device is offline.',
      type: 'error',
    })
  }
  return (
    <authContext.Provider value={auth}>
      {auth.authStatus === 'processing' && <ActivityIndicator />}
      {children}
    </authContext.Provider>
  )
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
  onSetNotification: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(ProvideAuth)
