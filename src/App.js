import React from 'react';
import './index.css';

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
import Projects from "./routes/Projects";


import { Route, HashRouter, Routes } from "react-router-dom";

function App() {
  return (
   <>

      <HashRouter>
       <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
       </Routes>
      </HashRouter>
      
    </>
  );
}

export default App;
