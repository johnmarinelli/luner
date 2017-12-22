import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './';

const wrapper = shallow(<Navigation />);

describe('(Component) Navigation', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
