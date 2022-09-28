import React from 'react'
import './Landingpage.css'
import image from './image.png'
import lock from './lock.svg'
const LandingPage = () => {
  return (      
    <div className='main-div'>
          <img src={image} alt='' className='left-card' />
        <div className='main-text'>
          <div className='main-text-div'>
            <h4 className=''>
              Imagine if <span className='main-text-span'> Snapchat </span>{' '}
              <br />
              had events
            </h4>
          </div>
          <p className='sub-text-p'>
            Easily host and share events with your friends across any social
            media
          </p>
        </div>
          <button className='btn-create'>Create my event</button>
          <div className='domain'>  
              <img src={lock} alt='lock' className='domain-lock' />
              <p className='domain-p'> domain.com </p>
              </div>
      </div>
    
  )
}

export default LandingPage
