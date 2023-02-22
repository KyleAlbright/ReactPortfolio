import "./ContactMe.css";
import { validateEmail } from "../utils/helpers";
import React, { useState }from "react";

function ContactMe() {
  const [formState, setFormState ] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(event) {
    if(event.target.name === "email") {
      const isEmail = validateEmail(event.target.value);
      if(!isEmail) {
        setErrorMessage("Please enter a valid email.")
      } else {
        if(!event.target.value.length) {
          setErrorMessage ("Please enter an email.");
        } else {
          setErrorMessage('');
        }
      }
    }
    if(!errorMessage) {
      setFormState({...formState, [event.target.name]: event.target.value});
    }
  }

  function handleEmpty(event) {
    if (event.target.name === 'Name' || event.target.name === 'Message') {
      if (!event.target.value.length) {
        setErrorMessage ('Please fill out all fields.')
      } else {
        setErrorMessage('');
      }
    }
      if (!errorMessage) {
        setFormState({...formState, [event.target.name]: event.target.value})
      }
 
  }




  return (
    <div className="contact">
      <form>
      <label>Name:</label>
        <input type="text"
        defaultValue ={name}
        onBlur={handleEmpty} 
        name = "Name">
        </input>
        
        <label>Email:</label>
        <input type="email"
         defaultValue ={email}
         onBlur={handleChange} 
         name = "email"></input>
        
        <label>Message:</label>
        <input type="text"  
         defaultValue ={message}
         onBlur={handleEmpty} 
         name = "message"></input>
        <textarea rows="7" placeholder="Your Message Here" />
        {errorMessage && (
          <div>
            <p className='error'>{errorMessage}</p>
          </div>
        )}
        <button className="btn">Submit</button>
      </form>
    </div>
  );
        }

export default ContactMe;
