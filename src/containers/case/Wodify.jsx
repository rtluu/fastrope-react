require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

const Wodify = (props) => {
  return (
    <div>
      <Nav />

      <div id="wodify" className="case-header">
        <div className="case-hero">
          <h1 className="case-headline">WODIFY</h1>
          <h3 className="case-tagline">Supercharging human ability</h3>
        </div>
      </div>

      <div className="case-content">

        <div className="content-main">
          <h4 className="text-header">Reinventing the fitness world</h4>
          <p className="text">Wodify is a leading gym software company powering over 4000+ crossfit gyms around the world. They wanted to keep up the pace with the fitness industry’s constant innovation and address the growing wearable market.</p>
          <div className="img" />
          <p className="text">Fast Rope identified a IoT bridge device and adapted it to Wodify’s use case. We worked with the hardware manufacturer to modify the device firmware, developed a custom cloud infrastructure so that Wodify could integrate data streaming with their own services and walked the Wodify team how to operationalize the solution at scale.</p>
          <p className="text">The solution enables athletes to pair their wearable device with a gym, powering new fitness experiences for classes and trainers. Biometric data of the participants is presented in real-time to further engage and motivate classes with real-time performance tracking.</p>
        </div>

        <div className="content-side">

          <div className="logo-block">
            <div className="logo-inner">
              <img className="logo" src={require("../../img/case/wodify-logo.png")}  />
              <a className="url"><h6 className="url-text">www.wodify.com</h6></a>
              <p className="what-we-did">What we did: IOT</p>
            </div>
            <a className="share-link"><button className="share-button">share this</button></a>
          </div>

          <div className="testimony-block">
            <div className="testimony-pic" />
            <p className="testimony-text">"Testimonial goes right here because  FastRope is just THE coolest ever."</p>
            <p className="testimony-source">- Barack Obama</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Wodify
