import React from 'react';
import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';
import Pill from './Pill';

export default {
  title: 'Pill',
  component: Pill,
  decorators: [withKnobs],
};

const options = {
  Green: 'green',
  Orange: 'orange',
  Red: 'red',
};

export const PillStory = () => (
  <Pill
    label={text('Label', 'Pill view')}
    type={select('Pill Type', options, 'green')}
  />
);

PillStory.story = {
  name: 'Pill',
};
