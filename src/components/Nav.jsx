require('../stylesheets/nav.scss');

import React from 'react';

 export default class Nav extends React.Component {

   constructor(props) {
     super(props);
     this.state = {

     };
   }

  render(){
    return(
      <nav className="nav">
        <div className="left">
          <a className="home-link" href="/">
            <div id="fr-logo"></div>
          </a>
        </div>
        <div className="right">
          <a className="page-link" href="#work">Work</a>
          <a className="page-link" href="/team">Team</a>
          <a className="page-link" href="/">Contact</a>
        </div>
      </nav>
    );
  }
}
