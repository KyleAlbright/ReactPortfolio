import "./HeroStyle.css";

import React, {useState} from "react";

import LightBulb from "../assets/video.mp4";

import Typewriter from 'typewriter-effect'

const Hero = () => {
  const [state] = useState({
    title: "MY NAME IS KYLE", 
    titleTwo: "AND I'M A... "
  })
  return (
    <div className="hero">
      <div className="mask">
        <video className="hero_image" autoPlay loop muted>
          <source src={LightBulb}  alt="LightBulb" type="video/mp4" />
          </video> 
      </div>
      <div className="hero_content">
        <p className='title'>{state.title}</p>
        <h1 className='titleTwo'>{state.titleTwo}</h1>
      
        <h1 className = 'text'>
        <Typewriter
        options={{
          autoStart:true, 
          loop: true,
          delay: 40,
          strings:[
            "WEB DEVELOPER.",
            "JAVASCRIPT ENTHUSIAST.",
            "DOG DAD."
            
          ]
        }}
        />
        </h1>
        
      
      </div>
      
      </div>
    
  );
};


export default Hero;
