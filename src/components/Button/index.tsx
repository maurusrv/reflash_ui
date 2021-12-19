import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'

interface ButtonProps {
  main?: boolean
  title: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ main, title, onPress }) => {
  const buttonStyle = tailwind(
    `rounded-lg w-32 ${main ? 'bg-green-400' : 'border border-green-400'}`,
  )
  const labelStyle = tailwind(
    `m-3 mx-4 ${
      main ? 'text-white' : 'text-green-400'
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
