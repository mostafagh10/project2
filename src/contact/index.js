import React, { Component } from 'react';
import './style.css';
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt,faEnvelope,faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faMobileAlt,faEnvelope,faMapMarkerAlt);

class Contact extends Component {
  state = {
    x : []
  }

  componentDidMount(){
    axios.get("data.json").then(res => {
      this.setState({
        x:res.data.contact
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
        <div className="col-md-4" key={x.key}>
          <div className="card contactcard">
          <FontAwesomeIcon className="contacticon" icon={x.icon} /><br />
          <h3 className="card-text-top">{x.name}</h3>
          <p>{x.details}</p>
          </div>
        </div>
      )
    })
  return (
    <div id="contact" className="Contact">
      <div className="container">
        <h1 className="contactheader">CONTACT <span className="contactspan">INFO</span></h1>

    <div className="row">
      {list}
    </div>
    </div>
    </div>
   )
  }
}

export default Contact;