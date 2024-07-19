import React from 'react'
import '../Styles/Testimonails.css'
import Navbar from '../Components/Navbar/Navbar'
import African from '../assets/relate.jpeg'
import Web from '../assets/webleader.jpeg'
import Me from '../assets/me.jpg'
import Dir from '../assets/dir.jpeg'
import Mobilenav from '../Components/Mobilenav/Mobilenav'
function Testimonials() {
  return (
    <div>
        <Navbar/>
        <Mobilenav/>
        <section className='cont'>
          <div className="testimonial-content">
        <text className='caption'>Evogress Group Limited (EGL) is focused on working with other organizations,
businesses, and personal brands to ensure they are full, positioned, equipped, and
sustained within their target market/ audience using the unique and strategic services we provide. </text>
        <img  className="Afro"src={African} alt="" />
      </div>
        </section>
        <section className='our-teams'>
          <h2 className='tm'>Our Team</h2>
          <div className="tm-cards">
            <div className="tm-card">
              <img src={Web} alt="" />
              <p>Sandra Haruno</p>
              <h5>Head Web Developer</h5>
            </div>
            <div className="tm-card">
              <img src={Me} alt="" />
              <p>Dennis Namikaze</p>
              <h5>Lead Project Manager</h5>
            </div>
            <div className="tm-card">
              <img src={Dir} alt="" />
              <p>Micheal Kakashi</p>
              <h5>Senior UI/UX Developer</h5>
            </div>
          </div>
        </section>
        <section className='testimonies'>
           <h2 className='testimony'>Testimonies from out Clients</h2>
           <p className='baby'>“The attention to detail that the Evogress team carries is exemplary, we grew our brand
visibility through their rebranding solution and we are back in the competitive realm like never
before. They delivered beyond expectation.” – Angela Muthoni, CEO, BabyArcade Kenya
</p>
      <h5 className='webdev'>“ Our company needed to go to the next level but we did not know how or where to start,
thanks to Evogress and their amazing web consultants who were able to create a strategy
proposal on how we could engage with our customers more, they were able to create a
company application that has increased our returns immensely. Thank you Evogress Team!” –
Irene Kucher, HR Manager, Webdev Solutions
</h5>
        </section>
      
    </div>
  )
}

export default Testimonials
