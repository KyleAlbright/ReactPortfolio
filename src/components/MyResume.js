import "./MyResumeStyle.css";
import { Document, Page, pdfjs } from  "react-pdf/dist/esm/entry.webpack5";

import KAResume from "../assets/KA.pdf";
import React, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyResume() {
 
  const [pageNumber] = useState(1);

  
 console.log("enviroment", process.env.NODE_ENV )

  return (
    <div className="rescontainer">
     
      <Document file={KAResume} onLoadSuccess={()=>{}} onLoadError={console.error}>
        <Page height="800" pageNumber={pageNumber} />
      </Document>
      
      <a href={KAResume} download>
					<button className="btn downloadBtn">Download Resume</button>
				</a>
    </div>
    
  );
}

export default MyResume;
