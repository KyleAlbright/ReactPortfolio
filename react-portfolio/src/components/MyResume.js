import "./MyResumeStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Resume from "../assets/KA.pdf";
import React, { useState } from "react";


function MyResume() {
 
  const [pageNumber] = useState(1);

  
 console.log("enviroment", process.env.NODE_ENV )

  return (
    <div className="rescontainer">
     
      <Document file={"https://kylealbright.github.io/ReactPortfolio/static/media/KA.d326378fc695671a2b4f.pdf"}
       onLoadSuccess={()=>{}}>
        <Page height="800" pageNumber={pageNumber} />
      </Document>
      
      <a href={Resume} download>
					<button className="btn downloadBtn">Download Resume</button>
				</a>
    </div>
    
  );
}

export default MyResume;
