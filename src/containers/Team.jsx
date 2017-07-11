require('../stylesheets/team.scss');

import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const Team = (props) => {
  return (
    <div id="team">
      <Nav />
      <h1>Team Page</h1>
      <Footer />
    </div>
  )
}

export default Team
