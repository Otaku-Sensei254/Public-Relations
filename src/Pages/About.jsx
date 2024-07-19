import React from 'react'
import '../Styles/About.css'
import Navbar from '../Components/Navbar/Navbar'
import { IoDiamondOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { IoShareSocialSharp } from "react-icons/io5";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Mobilenav from '../Components/Mobilenav/Mobilenav';
function About() {
  return (
    <div>
        <Navbar/>
        <Mobilenav/>
        <div className="About-content">
          <h1 className='About-header'>About Us</h1>
          <section className='Draw-them'>
            <h2 className='Sell'>Why Choose Us?</h2>
              <text className='Sell-txt'>Our creative solutions are backed by a team of experts who are always ready to
provide customized and excellent services that meet your business’s needs.
We are committed to being the most sought-after communication and digital
marketing agency in Africa by merit</text>
          </section>
          <section className='teams'>
              <h2 className='serve'>Our Services</h2>
            <div className="team-cards">
               <div className="card"> 
                  <h2>Branding Posting</h2>
                <IoDiamondOutline className='card-icon' />
                <text>We will help you to implement a solid brand position for your business. Through this a brand
positioning statement is used so as to give your target market a holistic picture of how you
would like your brand to be perceived by customers</text>
               </div>
               <div className="card">
                <h2>Corporate Communications</h2>
                <IoPersonOutline className='card-icon' />
                <text>Corporate communications is the art of conveying a company's vision, values, and voice with clarity and consistency, 
                  fostering trust and engagement among 
                  stakeholders.</text>
               </div>
               <div className="card">
                <h2>Public Relations Strategy</h2>
                <FaLink className='card-icon' />
                <text>Effective public relations is about creating genuine connections, 
                  telling authentic stories, and building a bridge of trust between an organization
                   and its audience.</text>
               </div>
               <div className="card">
                <h2>Digital Marketing</h2>
                <FaLaptopCode className='card-icon' />
                <text>Digital marketing is the art of connecting with your audience in the right place,
                   at the right time, with the right message.</text>
               </div>
               <div className="card">
                <h2>Crisis Management</h2>
                <SiNginxproxymanager className='card-icon' />
                <text>Effective crisis management turns challenges into opportunities by responding with clarity,
                   empathy, and decisive action.</text>
               </div>
               <div className="card">
                <h2>Social Media Marketing</h2>
                <IoShareSocialSharp className='card-icon' />
                <text>Social media marketing is about building authentic relationships and
                   engaging with your audience where 
                   they already spend their time.</text>
               </div>
            </div>
          </section>
          <section className='Contact-us'>
                <h3 className='reach-us'>Get Hold of us</h3>
                <Link to="/contact"><button className='call-now'>Reach Out<IoCallOutline/></button></Link>
          </section>
          <footer className='my-footer'>Evogress
            <p>Copyright ©2024 All rights reserved | This template is made with  by Dhuhu-Inc</p>
            <div className="footer-icons">
             <TiSocialYoutube className='ytb'/>
             <SlSocialInstagram className='insta'/>
             <TiSocialTwitter className='twitter'/> 
            </div>
            <div className="projects">
              <h4>Top Projects</h4>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </div>
              
          </footer>
        </div>
    </div>
  )
}

export default About

