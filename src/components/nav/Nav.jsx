import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {GiSecretBook} from 'react-icons/gi'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsCodeSlash /></a>
      <a href="#courses" onClick={() => setActiveNav('#courses')} className={activeNav === '#courses' ? 'active' : ''}><GiSecretBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWork /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav
