import React, { Component } from 'react';

import About from './about/index'
import Contact from './contact/index'
import Home from './home/index'
import Nav from './navbar/index'
import Projects from './projects/index'
import Services from './services/index'
import Footer from './footer/index'
import $ from 'jquery';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Nav />
      <Home />
      <Services />
      <Projects /><br /><br /><br /><br />
      <About /><br /><br /><br /><br />
      <Contact /><br /><br /><br />
      <Footer />
    </div>
  );
  }
}

export default App;
