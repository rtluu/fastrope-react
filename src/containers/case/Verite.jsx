require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

const Verite = (props) => {
  return (
    <div>
      <Nav />

      <div id="verite" className="case-header">
        <div className="case-hero">
          <h1 className="case-headline">Verité | US State Department</h1>
          <h3 className="case-tagline">Ending human trafficking</h3>
        </div>
      </div>

      <div className="case-content">

        <div className="content-main">
          <h4 className="text-header">Data for Good</h4>
          <p className="text">Verite is an non-profit organization that conducts research, advocacy, consulting, trainings, and assessments with a vision that people worldwide work under safe, fair, and legal conditions. The nonprofit came to us to find trends in large sets of qualitative and quantitative data to help uncover labor rights violations for Fortune 500 companies.</p>
          <img className="example" src={require("../../img/case/verite-ex.png")}  />
          <h4 className="text-header">What we did</h4>
          <p className="text">Fastrope produced an intelligent data capture tool that automatically tagged and categorized notes taken by field researchers. Paired with a custom visualization platform that defined relationships between clients and their suppliers, this allowed clients to easily flag abnormalities and identify systemic issues in their supply chain so they can take immediate action.</p>
        </div>

        <div className="content-side">

          <div className="logo-block">
            <div className="logo-inner">
              <img className="logo" src={require("../../img/case/verite-logo.png")}  />
              <a className="url"><h6 className="url-text">www.state.gov</h6></a>
              <p className="what-we-did">Categories: Data Science</p>
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

export default Verite
