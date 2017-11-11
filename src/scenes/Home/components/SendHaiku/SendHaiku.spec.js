import React from 'react';
import { shallow } from 'enzyme';
import SendHaiku from './'; 

const wrapper = shallow(<SendHaiku />);

describe('(Component) SendHaiku', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
