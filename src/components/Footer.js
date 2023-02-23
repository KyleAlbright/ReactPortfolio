import "./FooterStyle.css";

import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <ul className="footer_info">
          <li>
            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="https://github.com/KyleAlbright"><strong>GitHub:</strong>KyleAlbright</a>
          </li>
          <li>
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="https://www.linkedin.com/in/kyle-albright-atx512/"><strong>Linkedin:</strong>kyle-albright-atx512</a>
          </li>
          <li>
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <a href=" https://twitter.com/gitresetkyle"><strong>Twitter: </strong> @gitresetkyle</a>

          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
