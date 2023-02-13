import "./HeroStyle.css";

import React from "react";

import LightBulb from "../assets/lightbulbhero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero_image" src={LightBulb} alt="LightBulb" />
      </div>
      <div className="hero_content">
        <p>MY NAME IS KYLE</p>
        <h1> AND I'M A DEVELOPER</h1>
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
