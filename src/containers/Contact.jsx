require('../stylesheets/contact.scss');

import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const Contact = (props) => {
  return (
    <div id="contact">
      <Nav/>
        <div className="contact-hero">
          <h1 className="contact-headline">Get in Touch</h1>
        </div>
        <div className="contact-form">

        </div>
      <Footer/>
    </div>
  )
}

export default Contact
