import React from 'react';
import Main from './components/Main/';
import Navigation from '../../../../components/Navigation/';

import './styles.css';

const App = () => 
  <div className='flex-container flex-column top-level-container'>
    <Main />
    <Navigation />
  </div>;

export default App;
