//Stix Local Fonts
require('./stylesheets/fonts.scss');

import "babel-polyfill";
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

var Route = Router.Route;

let mountNode = document.getElementById('app');

ReactDom.render(
  <Router>
    <Routes />
  </Router>,
  mountNode
);
