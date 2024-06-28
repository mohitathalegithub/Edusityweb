import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Capmus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/VideoPlayer'

const App = () => {
  const[playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="our PROGRAM" title="What We Offer"/>
      <Programs/>   
  
      <About setplaystate={setPlayState}/>
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subtitle="Testimonials" title="What student say"/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </div>
      {/* <VideoPlayer playstate={playState} setplaystate={setPlayState}/> */}
    </div>
  )
}

export default App
