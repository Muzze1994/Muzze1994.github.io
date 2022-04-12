import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/rasmus_wedding_photo.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hej, Jag heter</h5>
        <h1>Rasmus Lind</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header