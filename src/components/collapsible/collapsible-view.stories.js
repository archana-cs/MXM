import React from 'react';
import {
  withKnobs, object,
} from '@storybook/addon-knobs';
import CollapsibleView from './collapsible-view';

export default {
  title: 'Collapsible View',
  component: CollapsibleView,
  decorators: [withKnobs],
};

export const CollapsibleViewStory = () => (
  <CollapsibleView
    ChildComponent={object('ChildComponent')}
  />
);

CollapsibleViewStory.story = {
  name: 'Collapsible View',
};
