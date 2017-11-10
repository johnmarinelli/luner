import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Loader from './'; 

it('renders a div with nine children', () => {
  shallow(<Loader />);
});
