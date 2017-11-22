import React from 'react';
import { Header } from './components';
import { Main } from './components';
import { Navigation } from '../../../../components/';

import './styles.css';

const App = () => 
  <div className='flex-container flex-column top-level-container'>
    <Header />
    <Main />
    <Navigation />
  </div>;

export default App;
