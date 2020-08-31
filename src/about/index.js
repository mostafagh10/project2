import React, { Component } from 'react';
import './style.css'
class About extends Component {
  render(){
  return (
    <div id="about" className="About">
      <div className="container">
        <div className="row">
          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-6">
            <div className="card aboutimage1">
              <div className="aboutborder"></div>
              <div className="aboutimage2">
              <img src="about1.jpeg" width="100%" height="280" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <h1 className="aboutheader">ABOUT <span className="aboutspan">ME</span></h1>
              <h5>Front End Developer</h5>
              <p className="abouttext">Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure <br /> impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.<br /> Eu debet urbanitas voluptatibus ius.

              Mel in natum assum tritani, atqui mazim numquam ei vim.</p>
              <button className="aboutbutton">DOWNLOAD RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default About;