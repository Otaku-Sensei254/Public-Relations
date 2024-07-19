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
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="testimonials">Testimonials</Link>
                    <Link to="contact">Contact us</Link>
                    

                </ul>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
