import React from 'react'
import '../Styles/Home.css'
import PR from '../assets/crowd.jpeg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home-content'>
      <h1>Welcome to Evogress Inc</h1>
      <img  className="Profile"src={PR} alt="" />
      <p>Evogress Group Limited is Kenya’s ever-growing and evolving public relations &
events agency based in Nairobi. We provide solutions on matters of Public
Relations, Events Management, Digital Marketing, Branding, Website and Social
Media Management and Influencer management to enable both small and large
established enterprises to grow and compete effectively in today’s competitive
market.
</p>
   <Link to="/contact"> <button className='Contact-btn'>Call Now!</button></Link>
    </div>
  )
}

export default Home
