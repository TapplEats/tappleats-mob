import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Button as RNButton } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Video } from 'expo-av'

import PropTypes from 'prop-types'

// import DateFnsAdapter from '@date-io/date-fns'
// import { isValid } from 'date-fns'

const FormElement = ({
  valid,
  // shouldValidate,
  touched,
  // errorMessage,
  value,
  changed,
  blured,
  elementSetup,
  label,
  elementOptions,
  elementType,
  // grid,
  disabled,
  // formElementSpacing,
}) => {
  let inputEl = null
  const video = useRef(null)
  const [videoStatus, setVideoStatus] = useState({})

  // let chipsArray = []
  // const dateFns = new DateFnsAdapter()
  // let dateValue = null

  switch (elementType) {
    case ('textarea'):
      inputEl = (
        <View>
          <TextInput
            label={label}
            onChangeText={changed}
            multiline={true}
            numberOfLines={4}
            value={value}
            // onChange={changed}
            onBlur={blured}
            error={touched && !valid}
            // helperText={errorMessage && errorMessage.var}
            disabled={disabled}
            // placeholder={elementSetup.placeholder}
            {...elementSetup}
          />
        </View>
      )
      break
    case ('video'):
      inputEl = (
        <View>
          <TextInput
            label={label}
            value={value}
            onChangeText={changed}
            onBlur={blured}
            error={touched && !valid}
            // helperText={errorMessage && errorMessage.var}
            disabled={disabled}
            {...elementSetup}
          />
          <Text>Supports: YouTube, SoundCloud, Facebook, Vimeo	, Twitch, Streamable, Wistia, DailyMotion, Mixcloud, Vidyard</Text>
          <View style={styles.container}>
            <Video
              ref={video}
              source={{ uri: value }}
              useNativeControls
              resizeMode='contain'
              style={styles.video}
              onPlaybackStatusUpdate={setVideoStatus}
            />
            <View>
              <Text>Video Preview</Text>
              <Text>Add video URL above to display</Text>
            </View>
          </View>
        </View>
      )
      break
    // case ('imageUpload'):
    //   inputEl = (
    //     <View style={styles.container}>
    //       <View style={styles.imageControls}>
    //         {elementSetup.showLabel && (
    //           <Text>Profile image</Text>
    //         )}
    //         <RNButton
    //           style={styles.button}
    //           onPress={openImagePickerAsync}
    //           title={imageUploadValue ? elementSetup.changeButtonText : elementSetup.selectButtonText}
    //           // title={}
    //         />
    //       </View>
    //       {selectedImage && (
    //         <View style={styles.imageContainer}>
    //           <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
    //         </View>
    //       )}
    //     </View>
    //   )
    //   break
    default:
      inputEl = (
        <View>
          <TextInput
            label={label}
            value={elementSetup.type === 'number' ? Number(value) : value}
            // onChange={changed}
            onChangeText={changed}
            onBlur={blured}
            error={touched && !valid}
            disabled={disabled}
            // placeholder={elementSetup.placeholder}
            {...elementSetup}
          />
        </View>
      )
  }

  return (
    <View>
      {inputEl}
    </View>
  )
}

FormElement.defaultProps = {
  valid: false,
  // shouldValidate: null,
  touched: false,
  // errorMessage: null,
  value: null,
  elementSetup: null,
  label: null,
  // elementOptions: null,
  elementType: null,
  // grid: null,
  disabled: false,
  blured: null,
  // formElementSpacing: 0,
}

FormElement.propTypes = {
  valid: PropTypes.bool,
  // shouldValidate: PropTypes.objectOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.array,
  //   PropTypes.bool,
  //   PropTypes.object,
  // ])),
  touched: PropTypes.bool,
  // errorMessage: PropTypes.objectOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.array,
  //   PropTypes.bool,
  //   PropTypes.object,
  // ])),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ])),
  ]),
  changed: PropTypes.func.isRequired,
  blured: PropTypes.func,
  elementSetup: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ])),
  label: PropTypes.string,
  // elementOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.array,
  //   PropTypes.bool,
  //   PropTypes.object,
  // ]))),
  elementType: PropTypes.string,
  // grid: PropTypes.objectOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.bool,
  // ])),
  disabled: PropTypes.bool,
  // formElementSpacing: PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  imageContainer: {
    flex: 0.5,
  },
  imageControls: {
    flex: 0.5,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
})

export default FormElement
