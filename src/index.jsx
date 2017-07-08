import "babel-polyfill";
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes.jsx'

//Stix Local Fonts (fonts.scss)
require('./stylesheets/fonts.scss');

let mountNode = document.getElementById('app');

ReactDom.render(
  <Router>
    <Routes />
  </Router>,
  mountNode
);
