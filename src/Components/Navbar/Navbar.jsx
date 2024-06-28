import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link,animateScroll as scroll} from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const[mobilemenu,setMobilemenu]=useState(false)
  const toggleMenu=()=>{
    mobilemenu?setMobilemenu(false):setMobilemenu(true);
// yeh sirf button k liye hai baki ka jo hide krna hai vo ul pr lga hai
  }
  return (
<nav className='container '>
    <img src={logo}className='logo' alt=''/>
    <ul className={mobilemenu?" ":'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>contact</button></Link></li>
        {/* dark-nav */}
    </ul>
    <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
</nav>  )
}

export default Navbar
