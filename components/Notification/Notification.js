import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'

const Notification = ({
  notification,
  isOpen,
  duration,
  hideNotification,
}) => {
  const handleClose = () => {
    hideNotification()
  }

  if (!notification) {
    return false
  }

  return (
    <View style={styles.container}>
      {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
      <Snackbar
        visible={isOpen}
        duration={duration || 2000}
        onDismiss={handleClose}
      >
        {notification.message}
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})

const mapStateToProps = state => ({
  notification: state.notification.notification,
  isOpen: state.notification.isOpen,
})

const mapDispatchToProps = dispatch => ({
  hideNotification: () => dispatch(actions.hideNotification()),
})

Notification.defaultProps = {
  notification: null,
  isOpen: false,
  duration: null,
}

Notification.propTypes = {
  notification: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  isOpen: PropTypes.bool,
  hideNotification: PropTypes.func.isRequired,
  duration: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)