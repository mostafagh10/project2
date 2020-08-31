import React, { Component,Fragment } from 'react';
import axios from 'axios';
import './style.css'
class Projects extends Component {
    state = {
      x : []
    }
  
    componentDidMount(){
      axios.get("data.json").then(res => {
        this.setState({
          x:res.data.projects
        })
      })
    }
    render(){
      const {x} = this.state;
      const list = x.map(x => {
        if(x.name2){
        return(
          <Fragment>
          
          <div className="col-md-6 pr1">
            <div className="projectcard1">
              <div className="projectover"></div>
              <img src="project1.jpg" height="300" width="100%" />
            </div>
          </div>
          <div className="col-md-6 pr1" key={x.key}>
            <div className="projectcard2 projecttext">
             <h3>{x.name1}</h3>
             <p>Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure <br /> impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.<br /> Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim.</p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="projectcard1 projecttext">
             <h3>{x.name2}</h3>
             <p>Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure <br /> impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.<br /> Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projectcard2">
            <div className="projectover"></div>
              <img src="project1.jpg" height="300" width="100%" />
            </div>
          </div>

          </Fragment>
        )
        }
        else{
          return(
          <Fragment>
          
          <div className="col-md-6">
            <div className="projectcard1">
            <div className="projectover"></div>
              <img src="project1.jpg" height="300" width="100%" />
            </div>
          </div>
          <div className="col-md-6" key={x.key}>
            <div className="projectcard2 projecttext">
             <h3>{x.name1}</h3>
             <p>Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure <br /> impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.<br /> Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim.</p>
            </div>
          </div>

          </Fragment>
          )
        }
      })
    return (
      <div id="projects" className="Services">
        <div className="container">
          <h1 className="serviceheader">RECENT <span className="servicespan">PROJECTS</span></h1><br />
  
      <div className="row no-gutters">
        {list}
      </div>
      </div>
      </div>
     )
    }
}

export default Projects;