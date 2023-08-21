import React from 'react'
import Image from '../../assets/img1.jpeg'
import { Element } from 'react-scroll'
import './Aboutme.css'
const Aboutme = () => {
  return (
    <Element className="Aboutme" id='Aboutme'>
    <div className="Aboutme">
      <div >
            <img src={Image} className='picture' alt='' />
        </div>
      <div >
        <h1 class="draw-line">About Me</h1>
       
          <div className='title'>As a React.js intern, I had the opportunity to work on various projects that required the use of this popular JavaScript library for building user interfaces. Under the guidance of senior developers, I gained invaluable hands-on experience in developing efficient and responsive web applications.  </div><br />
          <div className='title1'>The internship also encouraged self-directed learning, allowing me to explore new concepts, frameworks, and libraries related to React.js. This emphasis on ongoing learning ensured that I was equipped with relevant and up-to-date skills.</div>
      <div  className="Form">
    <button type="text"  className="todo-btn">Find me</button>
    <button type="text" className='todo-btn'>Details</button>
  </div>
  </div>
    </div>
    </Element>
  )
}

export default Aboutme
