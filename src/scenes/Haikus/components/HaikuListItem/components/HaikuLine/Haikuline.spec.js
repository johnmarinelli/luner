import React from 'react';
import { shallow } from 'enzyme';
import HaikuLine from './'; 

const wrapper = shallow(<HaikuLine />);

describe('(Component) HaikuLine', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
