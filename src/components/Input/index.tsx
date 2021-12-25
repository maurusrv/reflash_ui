import React from 'react'
import { StyleProp, Text, TextInput, View, ViewStyle } from 'react-native'
import tailwind from 'tailwind-rn'

interface InputProps {
  containerStyle?: StyleProp<ViewStyle>
  type: string
  label: string
  value: string
  onChangeText: (text: string) => void
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  type,
  label,
  onChangeText,
  value,
}) => {
  let field = null
  const fieldStyle = tailwind(
    'bg-gray-100 rounded-lg border-white text-base h-10 px-2',
  )
  if (type === 'text') {
    field = (
      <TextInput
        style={fieldStyle}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
      />
    )
  } else if (type === 'password') {
    field = (
      <TextInput
        style={fieldStyle}
        onChangeText={onChangeText}
        secureTextEntry
        value={value}
      />
    )
  }

  if (field) {
    return (
      <View style={containerStyle}>
        <Text style={tailwind('p-1')}>{label}</Text>
        {field}
      </View>
    )
  }

  return null
}

export default Input
