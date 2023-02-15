import React from 'react';

import Navbar from '../components/Navbar'
import Background from '../components/Background';
import Footer from '../components/Footer'

import MyResume from '../components/MyResume';

const Resume = () => {
  return (
    <div>
    
    <Navbar />
    <Background heading ="Contact me!" text='Looking forward to hearing from you. ' />
    <MyResume />
    <Footer />
    
    </div>
  )
}

export default Resume