import './MyProjectsStyle.css';
import JavaLogo from '../assets/javalogo.png';
import APILogo from '../assets/apilogo.png';
import NodeLogo from '../assets/nodelogo.png';
import ReactLogo from '../assets/reactlogo.png';
import MySQLLogo from '../assets/mysqllogo.png';
import ExpressLogo from '../assets/expresslogo.png';


import React from 'react'

const MyProjects = () => {
  return (
    <div className = "container">
       <div className="card">
      <div className="card-image" id="card-image2">
        <img className = "javaLogo" src={JavaLogo} alt="JavaScript Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/KyleAlbright/Module6WeatherApp"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://kylealbright.github.io/Module6WeatherApp/"target="_blank>">Application</a></button>
      <h4>Weather App</h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image3">
        <img className= 'APILogo' src={APILogo} alt="API Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/sidgray80/cinemate"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://sidgray80.github.io/cinemate/"target="_blank>">Application</a></button>
      <h4>CineMate</h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image4">
        <img className= 'NodeLogo' src={NodeLogo} alt="Node Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/zeebigbadkitty/Bottoms-Up"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://bottoms-up-2023-app.herokuapp.com/"target="_blank>">Application</a></button>
      <h4>Bottoms-up Inventory </h4>
    </div>
    <div className="card">
      <div className="card-image" id="card-image5">
        <img className = 'ExpressLogo' src={ExpressLogo} alt="React Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/KyleAlbright/UTBC11notetaker"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://powerful-oasis-96202.herokuapp.com/"target="_blank>">Application</a></button>
      <h4>Note Taker</h4>
      </div>
      <div className="card">
      <div className="card-image" id="card-image6">
        <img className = 'MySQLLogo' src={MySQLLogo} alt="React Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/KyleAlbright/UTBCTechBlog"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://ancient-woodland-08445.herokuapp.com/"target="_blank>">Application</a></button>
      <h4>Tech-Blog</h4>
      </div>
      <div className="card">
      <div className="card-image" id="card-image7">
        <img className = 'ReactLogo' src={ReactLogo} alt="React Logo" />
      </div>
      <button className="card-button btn"><a href="https://github.com/KyleAlbright/ReactPortfolio"target="_blank>">Github</a></button>
      <button className="card-button btn"><a href="https://kylealbright.github.io/ReactPortfolio/#/"target="_blank>">Application</a></button>
      <h4>React Portfolio</h4>
      </div>

  
    </div>
  )
}

export default MyProjects