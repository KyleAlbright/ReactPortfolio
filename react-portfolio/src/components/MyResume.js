import "./MyResumeStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Resume from "../assets/KA.pdf";
import React, { useState } from "react";

function MyResume() {
 
  const [pageNumber] = useState(1);

  
 

  return (
    <div className="rescontainer">
     
      <Document file={Resume} onLoadSuccess={()=>{}}>
        <Page height="800" pageNumber={pageNumber} />
      </Document>
      
      <a href={require("../assets/KA.pdf")} download>
					<button className="btn downloadBtn">Download Resume</button>
				</a>
    </div>
    
  );
}

export default MyResume;
