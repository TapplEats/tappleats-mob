import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// import parse from 'html-react-parser'

// import Box from '@material-ui/core/Box'
// import Typography from '@material-ui/core/Typography'

// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

// import { infoBoxStyles } from './styles'

const InfoBox = ({ title, infoList }) => {
  // const classes = infoBoxStyles()

  return (
    <View>
      {title && <Text>{title}</Text>}
      {infoList && infoList.map((item, i) => (
        <View key={i}>
          {infoList.length > 1 && <Ionicons name="radio-button-off" size={24} color="black" />}
          <Text>{item}</Text>
        </View>
      ))}
    </View>
    // <Box className={`${classes.infoBoxContainer} ${type && classes[type]}`}>
    //   {title && <Typography className={classes.infoTitle} component="p" variant="body1">{title}</Typography>}
    //   {infoList && infoList.map((item, i) => (
    //     <Typography key={i} className={classes.infoItem} component="p" variant="body1">
    //       {infoList.length > 1 && <RadioButtonUncheckedIcon className={classes.infoItemIcon} />}
    //       <span>{parse(item)}</span>
    //     </Typography>
    //   ))}
    // </Box>
  )
}

InfoBox.defaultProps = {
  title: null,
  infoList: null,
  // type: null,
}

InfoBox.propTypes = {
  title: PropTypes.string,
  infoList: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  // type: PropTypes.string,
}

export default InfoBox
