import React from 'react';
import { shallow } from 'enzyme';
import Row from './'; 

const props = {
  index: 0,
  maxSyllableCount: 1
};

const wrapper = shallow(<Row {...props} />);

describe('(Component) Row', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
