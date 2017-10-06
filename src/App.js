import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Provider } from 'react-redux';
import LineComponent from './components/LineComponent';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';

const App = () => 
  <div>
     <Header />
     <Main />
  </div>;

export default App;
