import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import Button from '.'
import CenterView from '../../../storybook/stories/CenterView'

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Button title="login" onPress={action('clicked')} />)
  .add('main', () => (
    <Button main title="sign up" onPress={action('clicked')} />
  ))
