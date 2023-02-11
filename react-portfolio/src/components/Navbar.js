import './NavStyle.css'
import React from 'react'



const navbar = () => {
  return (
    <div className ='header'>
      <h1>Kyle Albright</h1>
      <ul className="nav_menu"> 
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
      

  )
}

export default navbar