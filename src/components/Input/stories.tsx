import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Input from '.'
import CenterView from '../../../storybook/stories/CenterView'
import tailwind from 'tailwind-rn'

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('text, empty', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="text"
      label="username"
      onChangeText={() => {}}
      value=""
    />
  ))
  .add('text, with value', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="text"
      label="username"
      onChangeText={() => {}}
      value="maurusrv"
    />
  ))
  .add('password, empty', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="password"
      label="password"
      onChangeText={() => {}}
      value=""
    />
  ))
  .add('password, with value', () => (
    <Input
      containerStyle={tailwind('w-9/12')}
      type="password"
      label="password"
      onChangeText={() => {}}
      value="password"
    />
  ))
