import React from 'react';
import { shallow } from 'enzyme';
import Logo from './';

const wrapper = shallow(<Logo />);

describe('(Component) Logo', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has default width of 100px', () => {
    expect(wrapper.props().width).toBe('100px');
  });
});
