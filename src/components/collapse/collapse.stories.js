import React from 'react';
import {
  withKnobs, object,
} from '@storybook/addon-knobs';
import Collapse from './collapse';

export default {
  title: 'Collapsible View',
  component: Collapse,
  decorators: [withKnobs],
};

export const CollapsibleViewStory = () => (
  <Collapse
    ChildComponent={object('ChildComponent')}
  />
);

CollapsibleViewStory.story = {
  name: 'Collapsible View',
};
