import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const ButtonStory = () => (
  <Button
    onClick={action('click')}
    label={text('label', 'Button')}
    disabled={boolean('disabled', false)}
  />
);

ButtonStory.story = {
  name: 'Button',
};
