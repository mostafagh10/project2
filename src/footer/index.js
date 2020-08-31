import React, { Component } from 'react';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faFacebook,faTwitter,faLinkedin,faInstagram);

class Footer extends Component {
  render(){
  return (
    <div className="Footer">
    <div className="container">
    <h3><span className="navthree">S</span>HAIF <span className="navthree">A</span>RFAN</h3>
    <h5>Your Complete Web Solution</h5><br />
            <FontAwesomeIcon className="footericon" icon={faFacebook} />
            <FontAwesomeIcon className="footericon" icon={faInstagram} />
            <FontAwesomeIcon className="footericon" icon={faTwitter} />
            <FontAwesomeIcon className="footericon" icon={faLinkedin} /><br /><br />
    <p>copyRight @ 2020 All Right Done</p>
    </div>
    </div>
  );
  }
}

export default Footer;