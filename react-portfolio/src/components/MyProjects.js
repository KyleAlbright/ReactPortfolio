import './MyProjectsStyle.css';
import JavaLogo from '../assets/javalogo.png';
import APILogo from '../assets/apilogo.png';
import NodeLogo from '../assets/nodelogo.png';
import ReactLogo from '../assets/reactlogo.png';

import React from 'react'

const MyProjects = () => {
  return (
    <div className = "container">
       <div className="card">
      <div className="card-image" id="card-image2">
        <img className = "javaLogo" src={JavaLogo} alt="JavaScript Logo" />
      </div>
      <button className="card-button btn"><a href="https://en.wikipedia.org/wiki/JavaScript"target="_blank>">Click Here</a></button>
      <button className="card-button btn"><a href="https://en.wikipedia.org/wiki/JavaScript"target="_blank>">Click Here</a></button>
      <h4>View JavaScript Applications</h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image3">
        <img className= 'APILogo' src={APILogo} alt="API Logo" />
      </div>
      <button className="card-button btn"><a href="https://sidgray80.github.io/cinemate/"target="_blank>">Click Here</a></button>
      <h4>CineMate - Movie Picker</h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image4">
        <img className= 'NodeLogo' src={NodeLogo} alt="Node Logo" />
      </div>
      <button className="card-button btn"><a href="https://bottoms-up-2023-app.herokuapp.com/"target="_blank>">Click Here</a></button>
      <h4>Bottoms-up Inventory App</h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image5">
        <img className = 'ReactLogo' src={ReactLogo} alt="React Logo" />
      </div>
      <button className="card-button btn"><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"target="_blank>">Click Here</a></button>
      <h4>View React Applications</h4>
    </div>
  
    </div>
  )
}

export default MyProjects