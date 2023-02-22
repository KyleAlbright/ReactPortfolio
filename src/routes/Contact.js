import React from 'react';

import Navbar from '../components/Navbar'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Background from '../components/Background';

const Contact = () => {
  return (
    <div>
      
    <Navbar />
    <Background heading ="Contact me!" text='Looking forward to hearing from you. ' />
    <ContactMe />
    <Footer />
    
    </div>
  )
}

export default Contact