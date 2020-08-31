import React, { Component } from 'react';

import {Bighome , Homeover , Hometext , Homeh1 , Homespan , Homebutton , Homeposition} from './style.js'
class Home extends Component {
  render(){
  return (
    <Bighome id="home">
      <Homeover>

      </Homeover>
      <Hometext>
        <div className="container">
          <Homeposition>
          <Homeh1>HELLO,<br />MY NAME IS <br /><Homespan>ARFAN</Homespan></Homeh1><br />
          <Homebutton>PORTOFOLIO</Homebutton>
          </Homeposition>
        </div>
      </Hometext>
    </Bighome>
  );
  }
}

export default Home;