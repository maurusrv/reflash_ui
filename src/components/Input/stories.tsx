import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Input from '.'
import CenterView from '../../../storybook/stories/CenterView'

storiesOf('Field', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('text', () => <Input type="text" label="username" onChange={() => {}} />)
  .add('password', () => (
    <Input type="password" label="password" onChange={() => {}} />
  ))
