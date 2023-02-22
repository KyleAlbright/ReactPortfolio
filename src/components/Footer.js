import "./FooterStyle.css";

import React from "react";

import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <ul className="footer_info">
          <li>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <strong>Address:</strong> 4905 Ingersoll Ln. Austin, Texas 78744
          </li>
          <li>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <strong>Phone:</strong> 512-567-0100
          </li>
          <li>
            <FaEnvelope
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <strong>Email:</strong> kyle_albright@hotmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
