import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>we ensure better Education for better world</h1>
            <p>Education transcends boundaries, enabling individuals to broaden their perspectives and contribute meaningfully to their communities and the world at large. Thus, investing in education is paramount, as it lays the foundation for a brighter and more prosperous future for generations to come.</p>
            <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>

        </div>
      
    </div>
  )
}

export default Hero
