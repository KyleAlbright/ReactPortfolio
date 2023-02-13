import "./ContactMe.css";

import React from "react";

const ContactMe = () => {
  return (
    <div className="contact">
      <form>
        <label>Your Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Message:</label>
        <input type="text"></input>
        <textarea rows="7" placeholder="Your Message Here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
