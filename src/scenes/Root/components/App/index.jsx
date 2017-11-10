import React from 'react';
import { Main } from './components/';
import { Navigation } from '../../../../components/';

import './styles.css';

const App = () => 
  <div className='flex-container flex-column top-level-container'>
    <Main />
    <Navigation />
  </div>;

export default App;
