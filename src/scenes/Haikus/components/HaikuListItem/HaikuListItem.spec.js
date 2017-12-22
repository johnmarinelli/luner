import React from 'react';
import { shallow } from 'enzyme';
import HaikuListItem from './';

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
const wrapper = shallow(
  <HaikuListItem haiku={mockHaiku} sendUpvote={jest.fn()} />
);

describe('(Component) ListItem', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
