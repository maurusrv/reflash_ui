import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'

interface ButtonProps {
  color: string
  primary?: boolean
  title: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ color, primary, title, onPress }) => {
  const buttonStyle = tailwind(
    `rounded-lg w-32 ${
      primary ? `bg-${color}-500` : `border border-${color}-500 bg-white`
    }`,
  )
  const labelStyle = tailwind(
    `mx-4 ${
      primary ? 'm-3 text-white' : `m-2.5 text-${color}-500`
    } text-lg font-bold text-center`,
  )

  return (
    <TouchableOpacity style={tailwind('rounded-lg w-32')} onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={labelStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
