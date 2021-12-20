import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import tailwind from 'tailwind-rn'

export default function CenterView({ children }) {
  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      {children}
    </View>
  )
}

CenterView.defaultProps = {
  children: null,
}

CenterView.propTypes = {
  children: PropTypes.node,
}
