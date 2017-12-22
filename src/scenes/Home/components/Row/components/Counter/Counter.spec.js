import React from 'react';
import { shallow } from 'enzyme';
import Counter from './';

const wrapper = shallow(<Counter />);

describe('(Component) Counter', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
