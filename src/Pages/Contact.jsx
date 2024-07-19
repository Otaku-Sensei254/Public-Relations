import React from 'react'
import '../Styles/Contact.css'
import Navbar from '../Components/Navbar/Navbar'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import Mobilenav from '../Components/Mobilenav/Mobilenav';

function Contact() {
  return (
    <div>
      <Navbar/>
      <Mobilenav/>
      <div className="contact-site">
      <div className="contact-deets">
             <h4>Get In Touch With Us! <FaRegEnvelope/> </h4>
             <h5>Feel free to contact us or visit us
              at our offices located as shown below
             </h5>
             <div className="deets">
             <p><FaLocationDot />Street, Nairobi, Nairobi · 5.7 km</p>
             <p><IoCallOutline/> 0712345678</p>
             <p><BiWorld/> www.Evogress.co.ke </p>
             </div>
             
          </div>
        <div className="contact-inputs">
          <label>Enter Your Name</label>
          <input type='text' placeholder='Enter your name' required/>
          <label>Enter Your Email</label>
          <input type='email' placeholder='Enter your email' required/>
          <label>Enter Phone/Mobile Number</label>
          <input type='number' placeholder='phone/mobile number' required/>
          <label>Write your message</label>
          <textarea name="message" rows="6" placeholder='enter your message'required></textarea>
          <button className='sub' type='submit'>Submit Message</button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
