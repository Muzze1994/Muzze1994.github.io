import React from 'react'
import CV from '../../assets/RASMUS_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Ladda ner CV</a>
        <a href="#contact" className='btn btn-primary'>Kontakta mig</a>
    </div>
  )
}

export default CTA