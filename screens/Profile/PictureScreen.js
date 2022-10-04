import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import firebase from 'firebase/app'

import { View, Image, Button as RNButton, ActivityIndicator } from 'react-native'

import InfoBox from '../../components/UI/InfoBox'

import { getCardById, updateCard } from '../../API/cards'
import { getFirebaseStorage } from '../../config/firebase'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'

import * as ImagePicker from 'expo-image-picker'

import * as actions from '../../store/actions'

const PictureScreen = ({
  cardData, onSetNotification, onLoadCardByUserId, onUpdateCard,
}) => {
  const auth = useAuth()
  const language = useLanguage()

  const userId = auth.user.uid
  const pageStatics = language.languageVars.pages.editProfile
  const isTheLoggedinUser = cardData.urlSuffix === auth.userUrlSuffix

  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [imageUploaded, setImageUploaded] = useState(false)
  const [imageSaved, setImageSaved] = useState(false)
  const [profileData, setProfileData] = useState(cardData || null)
  const [currentImage, setCurrentImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const openImagePickerAsync = async () => {
    // No permissions request is necessary for launching the image library
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri)
      setImageSaved(false)
    }
  }

  useEffect(() => {
    let mounted = true

    if ((mounted && !cardData.userId) || !isTheLoggedinUser) {
      (async () => {
        setLoading(true)
        const data = await getCardById(userId)
        await onLoadCardByUserId(userId)
        setProfileData(data)

        if (data.image) {
          const profileStorageImage = await getFirebaseStorage().ref(`profiles/${data.image}`).getDownloadURL()
          setCurrentImage(profileStorageImage)
        }

        setTimeout(() => setLoading(false), 1000)
      })()
    }

    if (mounted && cardData.image) {
      (async () => {
        const profileStorageImage = await getFirebaseStorage().ref(`profiles/${cardData.image}`).getDownloadURL()
        setCurrentImage(profileStorageImage)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, onLoadCardByUserId, isTheLoggedinUser])

  const updatePictureHandler = async () => {
    setLoading(true)
    const data = { ...cardData }
    const cardDetails = {
      ...data,
    }
    try {
      if (selectedImage) {
        cardDetails.image = +new Date()
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function () {
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", selectedImage, true);
          xhr.send(null);
        });
    
        const ref = getFirebaseStorage().ref().child(`/profiles/${cardDetails.image}`)
        const snapshot = ref.put(blob)

        if (cardData.image) {
          await getFirebaseStorage().ref().child(`/profiles/${cardData.image}`).delete()
          console.log('deleted')
        }

        snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
          console.log('start uploading image')
          setUploadingImage(true)
          setImageUploaded(false)
        },
        error => {
          setUploadingImage(false)
          setImageUploaded(false)
          setLoading(false)
          console.log(error)
          blob.close()
          return
        },
        () => {
          snapshot.snapshot.ref.getDownloadURL().then(url => {
            setUploadingImage(false)
            setImageUploaded(true)
            // setTimeout(() => setLoading(false), 1000)
            setLoading(false)
            onSetNotification({
              message: pageStatics.messages.notifications.profilePictureUpdateSuccess,
              type: 'success',
            })
            console.log('uploading image ended')
            console.log(url)
            blob.close()
            return url
          })
        }
        )
        console.log('saved')
      }

      await updateCard(userId, cardDetails)
      console.log('updated db')
      onUpdateCard({ image: cardDetails.image })
      console.log('updated redux')

      setImageSaved(true)
      // if (imageUploaded) {
      //   setTimeout(() => setLoading(false), 1000)
      // }

      // onSetNotification({
      //   message: pageStatics.messages.notifications.profilePictureUpdateSuccess,
      //   type: 'success',
      // })
    } catch (err) {
      // setLoadingDone(true)
      setLoading(false)
      onSetNotification({
        message: pageStatics.messages.notifications.profilePictureUpdateError,
        type: 'error',
      })
    }
  }

  const buttonDisabled = imageSaved || loading

  // if (loading) {
  //   return <ActivityIndicator />
  // }

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <InfoBox infoList={[pageStatics.messages.info.picture.first]} />
          <RNButton
            onPress={openImagePickerAsync}
            title={currentImage ? 'Change Image' : 'Pick Image'}
          />
          {selectedImage && (
            <View>
              <Image source={{ uri: selectedImage }} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
            </View>
          )}
          {(!selectedImage && currentImage) && (
            <View>
              <Image source={{ uri: currentImage }} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
            </View>
          )}
          <RNButton
            disabled={buttonDisabled}
            onPress={updatePictureHandler}
            title={pageStatics.buttons.updatePicture}
          /> 
        </View>
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  cardData: state.cards,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onLoadCardByUserId: userId => dispatch(actions.loadCardByUserId(userId)),
  onUpdateCard: newData => dispatch(actions.updateCard(newData)),
})

PictureScreen.defaultProps = {
  cardData: null,
}

PictureScreen.propTypes = {
  onSetNotification: PropTypes.func.isRequired,
  onLoadCardByUserId: PropTypes.func.isRequired,
  cardData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onUpdateCard: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureScreen)
