import React from 'react'
import { Link } from 'react-scroll'
import Picture from '../../assets/img.jpeg'
import './TopContent.css'
import { Element } from 'react-scroll'

const TopContent = () => {
  return (
    <Element id='topContent'>
      <div className='topcontent'>
        <img src={Picture} className='bg' alt=''></img>

        <div className='topcontent__container'>
          <div className='name'>
            ILAKKIYA SHANMUGAM
          </div>
          <div className='work' >
            Doing Intern at USquare
          </div>
          <a href='www.google.com'><button className='topcontent__downloadbutton'>Download CV</button></a>
          <Link to="projects" smooth={true} duration={500}><button className='topcontent__workbutton'>My work</button></Link>
        </div>



      </div>
    </Element>
  )
}

export default TopContent
