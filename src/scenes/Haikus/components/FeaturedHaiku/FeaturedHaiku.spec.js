import React from 'react';
import { shallow } from 'enzyme';
import FeaturedHaiku from './';

const mockHaiku = {
  id: 0,
  lines: [
    {
      content: 'test line'
    },
    {
      content: 'test line'
    },
    {
      content: 'test line'
    }
  ],
  author: 'test'
};
const wrapper = shallow(<FeaturedHaiku haiku={mockHaiku} sendUpvote={jest.fn()}/>);

describe('(Component) ListItem', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
