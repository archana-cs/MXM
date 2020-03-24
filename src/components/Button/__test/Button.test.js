import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter() });


describe('Button', () => {
  // Find if component exists
  it('Button component rendered ..', () => {
    expect(shallow(<Button />).find('button.mcm-button').exists()).toBe(true);
  });
});
