import './BackgroundStyle.css';

import React, { Component } from 'react';

import { motion } from "framer-motion";



class Background extends Component {
 render(){
  return (
    <motion.div className= "background_image" animate={{x:-100, scale:1, delay: 4}} initial= {{scale: 0}}>
      <div className= "heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        <p>{this.props.text2}</p>
        <p>{this.props.text3}</p>
        <p>{this.props.text4}</p>
        <p>{this.props.text5}</p>
        <p>{this.props.text6}</p>
        <p>{this.props.text7}</p>

      </div>
    </motion.div>
  )
}
}
export default Background