import React from 'react';
import { shallow } from 'enzyme';
import Loader from './'; 

const wrapper = shallow(<Loader />);

describe('(Component) Loader', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
