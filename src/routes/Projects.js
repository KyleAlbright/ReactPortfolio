import React from "react";

import Navbar from "../components/Navbar";
import MyProjects from '../components/MyProjects'
import Footer from "../components/Footer";
import Background from '../components/Background';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Background heading='Hey' text="Look What I Can Do!" />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Projects;
