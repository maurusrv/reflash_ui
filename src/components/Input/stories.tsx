import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Field from '.'
import CenterView from '../../../storybook/stories/CenterView'

storiesOf('Field', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('text', () => <Field type="text" label="username" onChange={() => {}} />)
  .add('password', () => (
    <Field type="password" label="password" onChange={() => {}} />
  ))
