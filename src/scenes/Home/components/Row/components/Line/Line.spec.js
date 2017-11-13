import React from 'react';
import { shallow } from 'enzyme';
import Line from './'; 

const lineProps = {
  index: 0,
  maxSyllableCount: 1
};

const wrapper = shallow(<Line {...lineProps} />);

describe('(Component) Line', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
