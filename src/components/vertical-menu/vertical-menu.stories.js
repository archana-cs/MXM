import React from 'react';
import {
  withKnobs, boolean, text, object,
} from '@storybook/addon-knobs';
import VerticalMenu from './vertical-menu';
import MockDataForVerticalMenu from './tack/mock-data-for-vertical-menu';

export default {
  title: 'Vertical Menu View',
  component: VerticalMenu,
  decorators: [withKnobs],
};

export const VerticalMenuStory = () => (
  <VerticalMenu
    isCollapsed={boolean('isCollapsed', false)}
    header={object('header', MockDataForVerticalMenu.header)}
    items={object('items', MockDataForVerticalMenu.items)}
    selectedItemId={text('selectedItemId', MockDataForVerticalMenu.selectedItemId)}
  />
);

VerticalMenuStory.story = {
  name: 'Vertical Menu View',
};