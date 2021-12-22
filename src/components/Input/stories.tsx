import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Input from '.'
import CenterView from '../../../storybook/stories/CenterView'
import tailwind from 'tailwind-rn'

storiesOf('Field', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('text', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="text"
      label="username"
      onChangeText={() => {}}
      value=""
    />
  ))
  .add('password', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="password"
      label="password"
      onChangeText={() => {}}
      value=""
    />
  ))
