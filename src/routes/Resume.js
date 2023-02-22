import React from 'react';

import Navbar from '../components/Navbar'
import Background from '../components/Background';
import Footer from '../components/Footer'

import MyResume from '../components/MyResume';

const Resume = () => {
  return (
    <div>
    
    <Navbar />
    <Background 
    heading ="Skills:" 
    text='HTML / CSS' 
    text2= 'Vanilla JavaScript'
    text3= 'Node.js, Express.js, Handlebars.js'
    text4= 'MySQL, MongoDB'
    text5= 'Restful APIs'
    text6= 'MVC Structure'
    text7= 'React' />
    <MyResume />
    <Footer />
    
    </div>
  )
}

export default Resume