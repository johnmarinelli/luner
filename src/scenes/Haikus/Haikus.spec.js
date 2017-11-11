import React from 'react';
import { shallow } from 'enzyme';
import Haikus from './Haikus'; 

const props = {
  renderedHaikus: [],
  loadingAnimation: '',
  showMore: ''
};

const wrapper = shallow(<Haikus {...props} />);

describe('(Component) Haikus', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
