import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './';

const wrapper = shallow(<ListItem />);

describe('(Component) ListItem', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
