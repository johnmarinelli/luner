import React from 'react';
import { shallow } from 'enzyme';
import About from './';

const wrapper = shallow(<About />);

describe('(Component) About', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
