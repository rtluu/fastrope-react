require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

const NetworkForGood = (props) => {
  return (
    <div>
      <Nav />

      <div id="networkforgood" className="case-header">
        <div className="case-hero">
          <h1 className="case-headline">Network For Good</h1>
          <h3 className="case-tagline">Accelerating micro-philanthropy</h3>
        </div>
      </div>

      <div className="case-content">

        <div className="content-main">
          <h4 className="text-header">Micro-Donation Platform for Charities</h4>
          <p className="text">Network for Good is the gold standard for online fundraising for charities and nonprofits. To date they have processed over $1 billion in donations. The company approached Fast Rope to build solutions to increase engagement and charitable donations among millennials.</p>
          <div className="img" />
            <h4 className="text-header">Our Solution</h4>
          <p className="text">After extensive user research about the company’s target demographics we developed a concept called HippoGive - an app that rounds up daily purchases to the nearest dollar. The spare change collected is then donated to charities selected in advance by the user.  Although, the donations are collected in the background, a social feed builds engagement and increases network effects between friends.</p>
          <p className="text">Since launch we have seen the velocity of donations increase from once or twice annually to daily, with aggregate amounts increasing as much as 700% on an annual basis.</p>
        </div>

        <div className="content-side">
          <img className="logo" src={require("../../img/case/networkforgood-logo.png")}  />
          <a className="url"><h6 className="url-text">networkforgood.org</h6></a>
          <p className="what-we-did">What we did: Mobile, Growth</p>
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

export default NetworkForGood
