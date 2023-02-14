import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home