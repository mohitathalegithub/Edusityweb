import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='about-img' className='about-img' />
            {/* <img  src={play_icon} alt='play-icon ' className='play-icon' onClick={()=>setPlayState(true)}/> */}
            
            
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Edusity University is a beacon of learning, innovation, and personal development. Within its halls, students embark on a transformative journey that goes beyond academics. Here, they cultivate critical thinking, creativity, and resilience, preparing themselves for the challenges of tomorrow.

At Edusity, diversity is celebrated, and students from all backgrounds come together to exchange ideas and perspectives. Through rigorous coursework and hands-on experiences, they not only acquire knowledge but also hone essential skills for success in a rapidly changing world.</p>


        </div>
      
    </div>
  )
}

export default About
