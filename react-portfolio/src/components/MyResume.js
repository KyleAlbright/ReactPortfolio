import "./MyResumeStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Resume from "../assets/KA.pdf";
import React, { useState } from "react";

function MyResume() {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPage);
    setPageNumber(1);
  }
 

  return (
    <div className="container">
     <a href={require("../assets/KA.pdf")} download>
					<button className="btn"></button>
				</a>
      <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="800" pageNumber={pageNumber} />
      </Document>
      <br></br>
      
    </div>
    
  );
}

export default MyResume;
