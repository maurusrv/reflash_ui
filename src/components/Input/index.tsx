import React from 'react'
import { Text, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'

interface FieldProps {
  type: string
  label: string
  onChange: () => void
}

const Input: React.FC<FieldProps> = ({ type, label, onChange }) => {
  let field = null
  if (type === 'text') {
    field = (
      <TextInput
        style={tailwind(
          'focus:border-green-400 bg-gray-100 rounded-lg border-white text-base h-10 px-2',
        )}
        onChange={onChange}
        autoCapitalize="none"
      />
    )
  } else if (type === 'password') {
    field = (
      <TextInput
        style={tailwind(
          'focus:border-green-400 bg-gray-100 rounded-lg border-white text-base h-10 px-2',
        )}
        onChange={onChange}
        secureTextEntry
      />
    )
  }

  if (field) {
    return (
      <View>
        <Text style={tailwind('p-1')}>{label}</Text>
        {field}
      </View>
    )
  }

  return null
}

export default Input
