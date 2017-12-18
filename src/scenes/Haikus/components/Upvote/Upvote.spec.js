import React from 'react';
import { shallow } from 'enzyme';
import Upvote from './'; 
import sinon from 'sinon';

const mock = sinon.spy();
const wrapper = shallow(<Upvote numUpvotes={1} sendUpvote={mock} />);

describe('(Component) Upvote', () => {
  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('fires sendUpvote when clicked', () => {
    wrapper.simulate('click');
    expect(mock).toHaveProperty('callCount', 1);
  });
});
