import React from 'react';
import Main from './components/Main.jsx';
import Navigation from './components/Navigation.jsx';
import Feedback from './components/Feedback.jsx';

import './App.css';
import './components/Flex.css';

const App = () => 
  <div className='flex-container flex-column'>
    <Feedback />
    <Main />
    <Navigation />
  </div>;

export default App;
