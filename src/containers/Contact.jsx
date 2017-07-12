require('../stylesheets/contact.scss');

import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }
  handleSubmit(event) {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById('contact-heading').scrollIntoView();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  }

  /**
   * Submits form data to the web server.
   */
  sendFormData() {
    // Prepare form data for submitting it.
    const formData = {
      company: React.findDOMNode(this.refs.company).value,
      email: React.findDOMNode(this.refs.email).value,
      name: React.findDOMNode(this.refs.name).value,
      phone: React.findDOMNode(this.refs.phone).value,
      message: React.findDOMNode(this.refs.message).value,
      referal: React.findDOMNode(this.refs.referal).value,
      website: React.findDOMNode(this.refs.website).value
    };

    // Extract checked values from "How can we help?" and "How soon do we need to start?".
    formData.interests = this.getSelected('interests');
    formData.when = this.getSelected('when');

    // Send the form data.
    const xmlhttp = new XMLHttpRequest();
    const _this = this;
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        const response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at ______.' });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  }
  /**
   * Transforms an object into a URL querystring.
   *
   * @param object params
   * @return string the formatted querystring.
   */
  requestBuildQueryString(params) {
    const queryString = [];
    for(const property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(`${encodeURIComponent(property)}=${encodeURIComponent(params[property])}`);
      }
    return queryString.join('&');
  }
  /**
   * Extracts selected values from checkboxes and radios.
   *
   * @param string fieldName
   * @return string the selected value(s).
   */
  getSelected(fieldName) {
    let i;
    const fields = document.getElementsByName(fieldName);
    const selectedFields = [];
    for (i = 0; i < fields.length; i++) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value);
      }
    }
    return selectedFields.join(', ');
  }
  /**
   * Renders the component.
   * https://facebook.github.io/react/docs/component-specs.html#render
   */
  render() {
    if (this.state.type && this.state.message) {
      const classString = `alert alert-${this.state.type}`;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
      <div id="contact">
        <Nav/>

        <div className="contact-hero">
          <h1 className="contact-headline">Get in Touch</h1>
        </div>


        <div id="contact-heading" className="contact-form">
          {status}

          <div id="get-in-touch" className="contact-cta">
            <h1 className="contact-cta-title">Get in Touch</h1>
            <p className="contact-cta-text">We’d love to hear from you.  Whether it’s a project idea, a question for us, or if you just want to say hi. We’d love to hear from you!</p>
          </div>

          <div id="find-us" className="contact-cta">
            <h1 className="contact-cta-title">Find Us</h1>
            <p className="contact-cta-text">1875 Connecticut Ave NW<br/>Floor 10<br/>Washington, DC, 20009</p>
          </div>

          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input placeholder="CONTACT NAME" className="form-control" name="name" ref="name" required type="text" />
            </div>
            <div className="form-group">
              <input placeholder="COMPANY" className="form-control" name="company" ref="company" required type="text" />
            </div>
            <div className="form-group">
              <input placeholder="PHONE" className="form-control" name="phone" ref="phone" required type="phone" />
            </div>
            <div className="form-group">
              <input placeholder="EMAIL" className="form-control" name="email" ref="email" required type="email" />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="MESSAGE" className="form-control" name="message" ref="message" rows="4" />
            </div>

            <div id="interests" className="form-group">
              <h3>INTEREST</h3>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="R and D" /><img src={require("../img/contact/interests/r_d.png")} /><p>R&D</p></label>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="Hardware" /><img src={require("../img/contact/interests/hardware.png")} /><p>HARDWARE</p></label>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="Growth" /><img src={require("../img/contact/interests/growth.png")} /><p>GROWTH</p></label>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="Design" /><img src={require("../img/contact/interests/design.png")} /><p>DESIGN</p></label>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="Software" /><img src={require("../img/contact/interests/software.png")} /><p>SOFTWARE</p></label>
              <label className="checkbox-inline"><input className="checkbox" name="interests" ref="interests" type="checkbox" value="Data" /><img src={require("../img/contact/interests/data.png")} /><p>DATA</p></label>
            </div>

            <div id="when" className="form-group">
              <h3>HOW SOON DO YOU NEED HELP?</h3>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Immediately" /><span>IMMEADIATELY</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Month" /><span>THIS MONTH</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Quarter" /><span>THIS QUARTER</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Year" /><span>THIS YEAR</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Other" /><span>OTHER</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Just Looking Around" /><span>JUST LOOKING AROUND</span></label>
            </div>

            <div id="submit" className="form-group">
              <button className="btn btn-primary" type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}
