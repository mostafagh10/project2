import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs,faHandshake,faBrain,faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faCogs,faHandshake,faBrain,faSortNumericDownAlt);

class Services extends Component {
  state = {
    x : []
  }

  componentDidMount(){
    axios.get("data.json").then(res => {
      this.setState({
        x:res.data.services
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
        <div className="col-lg-3 col-sm-6" key={x.key}>
          <div className="card servicecard">
            <FontAwesomeIcon className="serviceicon" icon={x.icon} />
      <h3 className="card-text-top">{x.name}</h3>
      <p>{x.text}</p>
          </div>
        </div>
      )
    })
  return (
    <div id="services" className="Services">
      <div className="container">
        <h1 className="serviceheader">SERV<span className="servicespan">I</span>CES</h1>
        <p>Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure <br /> impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.<br /> Eu debet urbanitas voluptatibus ius.

Mel in natum assum tritani, atqui mazim numquam ei vim.</p><br />

    <div className="row">
      {list}
    </div>
    </div>
    </div>
   )
  }
}

export default Services;