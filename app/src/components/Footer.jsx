import React from 'react'
import "../styles/Footer.css"


const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-one'>
        <h1>LOCATION</h1>
        <h3>404, Kaushambi<br/>
            Ghaziabad</h3>
      </div>

      <div className='footer-two'>
        <h1>WORKING HOURS</h1>
        <h3>Mon-Fri: 9:00AM - 10:00PM <br/>
            Saturday: 10:00AM - 8:30PM <br/>
            Sunday: 12:00PM - 5:00PM</h3>
      </div>

      <div className='footer-three'>
        <h1>ORDER NOW </h1>
        <h3>Ring us<br/>
            <span>999-888-7777</span></h3>
      </div>

      <div className='footer-four'>
        <h1>FOLLOW US</h1>
        <div className='footer-logo'>
          <img src="/facebook.svg" alt="fb"/>
          <img src="/insta.svg" alt="insta"/>
          <img src="/twitter.svg" alt="twitter"/>
          <img src="/youtube.svg" alt="yt"/>
        </div>
          
      </div>
      
    </div>
  )
}

export default Footer
