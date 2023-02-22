import "./MyResumeStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import KAResume from "../assets/KA.pdf";
import React, { useState } from "react";


function MyResume() {
 
  const [pageNumber] = useState(1);

  
 console.log("enviroment", process.env.NODE_ENV )

  return (
    <div className="rescontainer">
     
      <Document file={KAResume} onLoadSuccess={()=>{}}>
        <Page height="800" pageNumber={pageNumber} />
      </Document>
      
      <a href={KAResume} download>
					<button className="btn downloadBtn">Download Resume</button>
				</a>
    </div>
    
  );
}

export default MyResume;
