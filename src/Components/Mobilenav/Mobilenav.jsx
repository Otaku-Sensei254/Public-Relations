import React, { useState } from 'react'
import './Mobilenav.css'
import { IoMenu } from "react-icons/io5";

function MobileMenu(){
    return(
        <div className="mobile-class">
            <ul>
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="testimonials">Testimonials</a>
            <a href="contact">Contact us</a>
            </ul>
        </div>
    )
}

function Mobilenav() {
    const [mobile, setMobile] = useState(false);

    const toggleMenu = ()=>{
        setMobile(!mobile);
    }

  return (
    <div>
        <div className="mobilenav">
            <div className="mobile-tap">
                <button onClick={toggleMenu} className='tap'>
                    <IoMenu/>
                </button>
                {mobile && <MobileMenu/>}
            </div>
        </div>
    </div>
  )
}

export default Mobilenav
