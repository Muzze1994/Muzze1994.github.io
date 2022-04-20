import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { useState } from 'react'

const Footer = () => {

  return (
    <footer >
     
      {/* <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul> */}

      <div className="footer__socials">
        <a href="https://www.facebook.com/rasmus.lind.18" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/rasmusnlind/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/Muzze1994" target="_blank" rel="noreferrer"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rasmus Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer