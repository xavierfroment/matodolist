import React from 'react'
import { FaGlobe, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className="text-center css-signature ">
      <br/>
      <div className="mb-1">
        <FaGlobe onClick={() => window.open("https://xavierfroment.github.io/cv-react/")} size={40} className="fa-icones mr-2"/>
        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/xavier-froment-654734177/","_blank")} size={40} className="fa-icones-linkedin mr-2"/>
        <FaFacebook onClick={() => window.open("https://www.facebook.com/xavier.froment.391","_blank")} size={40} className="fa-icones-facebook mr-2"/>
        <FaTwitter onClick={() => window.open("https://twitter.com/XFroment","_blank")} size={40} className="fa-icones-twitter mr-2"/>
        <FaEnvelope onClick={() => (window.location.href="mailto:fromentxavier@gmail.com")} size={40} className="fa-icones"/>
      </div>
      <small>
        Créée par Xavier FROMENT - 2021
      </small>
    </div>
  )
}

export default Footer