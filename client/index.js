import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './Routes.jsx';

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />
  , document.querySelector('.container'));
  