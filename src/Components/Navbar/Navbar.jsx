import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Wrld from '../../assets/Evogress.png'

function Navbar() {
  return (
    <>
      <div className="head">
        <div className="nav-bar">
           <Link to="/"><img  className="nav-logo"src={Wrld} alt="" /></Link>
            <div className="nav-links">
                <ul>                
                    <a href="/">Home</a>
                    <a href="about">About</a>
                    <a href="testimonials">Testimonials</a>
                    <a href="contact">Contact us</a>
                    

                </ul>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
