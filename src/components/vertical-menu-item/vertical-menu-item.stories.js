import React from 'react';
import {
  withKnobs, boolean, text, number,
} from '@storybook/addon-knobs';
import VerticalMenuItem from './vertical-menu-item';
import MockDataForVerticalMenu from '../vertical-menu/tack/mock-data-for-vertical-menu';

export default {
  title: 'Vertical Menu Item',
  component: VerticalMenuItem,
  decorators: [withKnobs],
};

const oListItem = MockDataForVerticalMenu.menuItemList[0];

export const VerticalMenuItemStory = () => (
  <VerticalMenuItem
    id={text('id', oListItem.id)}
    label={text('label', oListItem.label)}
    icon={text('icon', oListItem.icon)}
    className={text('className', oListItem.className)}
    count={number('count', oListItem.count)}
    isCollapsed={boolean('isCollapsed', false)}
    isSelected={boolean('isSelected', true)}
  />
);

VerticalMenuItemStory.story = {
  name: 'Vertical Menu Item',
};
