import "./HeroStyle.css";

import React, {useState} from "react";

import LightBulb from "../assets/lightbulbhero.jpg";

import Typewriter from 'typewriter-effect'

const Hero = () => {
  const [state] = useState({
    title: "MY NAME IS KYLE", 
    titleTwo: "AND I'M A... "
  })
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero_image" src={LightBulb} alt="LightBulb" />
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
            "JAVASCRIPT ENTHUSIAST.",
            "DOG DAD.", 
            "WEB DEVELOPER."
          ]
        }}
        />
        </h1>
        <br></br>
        <button className="btn btn-light">
          <a
            href="https://www.linkedin.com/in/kyle-albright-atx512/"
            target="_blank>"
          >
            Linkedin
          </a>
        </button>
      </div>
      
      </div>
    
  );
};


export default Hero;
