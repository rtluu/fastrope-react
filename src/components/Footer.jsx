require('../stylesheets/footer.scss');

import React from 'react';

 export default class Nav extends React.Component {

   constructor(props) {
     super(props);
     this.state = {

     };
   }

  render(){
    return(
      <footer className="footer">
        <div className="left">
          <p>Copyright FastRope Labs 2017. All rights reserved.</p>
        </div>
        <div className="right">
          <a className="page-link" href="/contact">Contact</a>
        </div>
      </footer>
    );
  }
}
