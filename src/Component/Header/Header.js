import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import { Element } from 'react-scroll'

const Header = () => {
  return (
    <Element className="head" id='header'>
        <div className='header'>
        <div className='header__left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header__right'>
            <Link to="topContent" smooth={true} duration={500}>
                <h4>Profile</h4>
                </Link>
                <Link to="Aboutme" smooth={true} duration={500}>
                    <h4>Aboutme</h4>
                </Link>
                <Link to="Skills" smooth={true} duration={500}>
                    <h4>My Skills </h4>
                    </Link>
                    <Link to="Skills" smooth={true} duration={500}>
                    <h4>Projects </h4>
                    </Link>
                    <Link to="Contact" smooth={true} duration={500}>
                    <h4>Contact</h4>
                    </Link>
                    <Link to="Contact" smooth={true} duration={500}>
                 <h4 className='header__rightbutton'>Join with me</h4>
                 </Link>
        </div>
                 
      
    </div>
    </Element>
  )
}

export default Header