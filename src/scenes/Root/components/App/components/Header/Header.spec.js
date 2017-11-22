import React from 'react';
import { shallow } from 'enzyme';
import Header from './'; 

const wrapper = shallow(<Header />);

describe('(Component) Header', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
