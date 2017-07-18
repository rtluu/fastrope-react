require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

const Envision = (props) => {
  return (
    <div>
      <Nav />

      <div id="envision" className="case-header">
        <div className="case-hero">
          <h1 className="case-headline">ENVISION</h1>
          <h3 className="case-tagline">Increasing wind power capacity</h3>
        </div>
      </div>

      <div className="case-content">

        <div className="content-main">
          <h4 className="text-header">Coloring book tumblr vinyl</h4>
          <p className="text">Envision Energy is a global provider for smart energy technology including energy management software and smart turbines. The company needed **_**.</p>
          <div className="img" />
          <p className="text">Fast Rope researched historical data of windmill performance and created a machine learning engine to accurately predict the lifespan and sustainability of individuals windmills.</p>
        </div>

        <div className="content-side">
          <img className="logo" src={require("../../img/case/envision-logo.png")}  />
          <a className="url"><h6 className="url-text">envision.com</h6></a>
          <p className="what-we-did">Categories: Data Science</p>
          <a className="share-link"><button className="share-button">share this</button></a>

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

export default Envision
