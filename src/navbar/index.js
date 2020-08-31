import React, { Component } from 'react';
import {Link} from 'react-scroll'
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faBars);

class Nav extends Component {
  render(){
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar bg" id="navone">
      <div className="container">
  <a className="navbar-brand" href="#"><span className="navthree">S</span>HAIF <span className="navthree">A</span>RFAN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><FontAwesomeIcon className="navtwo" icon="bars" /></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="home" href="#">HOME</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="services"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="services" href="#">SERVICES</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="projects" href="#">PROJECTS</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
    <a className="nav-link" data-scroll="about" href="#">ABOUT</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="contact" href="#">CONTACT</a>
        </Link>
        <FontAwesomeIcon icon="Bars" />
      </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  );
  }
}

export default Nav;