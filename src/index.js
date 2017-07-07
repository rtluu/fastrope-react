import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

import data from './data.js'

import Router from './router.js'

//Stix Local Fonts (fonts.scss)
require('./stylesheets/fonts.scss');

function onDataChange() {
  // Splits location into `/` separated parts,
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  // Gets the DOM Element to render to
  const content = document.getElementById('app')
  // Renders with the location and the data
  ReactDom.render(<Router {...data} location={location}/>, content)
}

window.addEventListener('hashchange', onDataChange, false);

onDataChange()
