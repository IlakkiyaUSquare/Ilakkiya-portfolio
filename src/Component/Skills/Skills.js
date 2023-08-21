import React from 'react'
import { Element } from 'react-scroll'
import './Skills.css'
const Skills = () => {
  return (
    <Element className="Skills" id='Skills'>
    <div id="skill">
      <div className='container'>
        <h1 className='tit'>MY SKILLS AND PROJECTS</h1>
        </div>
        <div className='skill-list'>
          <div>
            <h2 className='skill'>HTML & CSS ,JavaScript</h2>
            <p className='project'>Project Name:<br/>Online Shopping System ( MINI PROJECT)</p>
          </div>
          <div>
            <h2 className='skill'>Python</h2>
            <p className='project'>Project Name:<br/>Telecommunication Churn Prediction </p>
          </div>
          <div>
            <h2 className='skill'>Artificial Intelligence</h2>
            <p className='project'>Project Name:<br/>Design For Visitor Authentication Based On Face Recognition Technology </p>
          </div>
          <div>
            <h2 className='skill'>Deep Learning</h2>
            <p className='project'>Project Name:<br/>Deep Learning Fungus Image Analysis for Early Detection of Diabetic Retinopathy </p>
          </div>

        </div>
      </div>
      </Element>
  
  )
}

export default Skills






