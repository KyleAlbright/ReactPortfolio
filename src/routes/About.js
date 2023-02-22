import React from 'react'

import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Background from '../components/Background';



const About = () => {
  return (
    <div>
    <Navbar />
    <Background heading='Hello' text="I'm Kyle Albright" />
    <AboutMe />
    <Footer />
    </div>
  )
}

export default About