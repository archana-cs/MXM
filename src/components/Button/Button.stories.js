import React from 'react';
import Button from './Button';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const ButtonStory = () => {
  return (
    <Button
      onClick={action('click')}
      label={text('label', 'Button')}
      disabled={boolean('disabled', false)}
    />
  );
};

ButtonStory.story = {
  name: 'Button'
};
