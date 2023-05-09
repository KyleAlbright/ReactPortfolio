import './AboutMeStyle.css'

import React from 'react'



import KyleImage from "../assets/wraparound.png";
const About = () => {
  return (
    
    <div className ='about'>
        
      <div className ="left_side">
    
      <h1>About Me</h1>
        <p>I am a recent graduate from the University of Texas' Full Stack Web Developer program. I reside in Austin Texas, and I am actively searching for a job as a Full-Stack Web Developer. When not building websites, I enjoy time spent with my family and dogs, watching football, or playing video games. </p>
        <p>I love functional programming and problem solving. I am detail oriented and have a passion for learning new technologies, and skills. </p>
        
      </div>
      <div className ='right_side'>
        <div className='portfolio_image'>
          <img className='kyle_image' src={KyleImage} alt='kyle_image' />
        </div>
      </div>
    </div>
  )
};

export default About