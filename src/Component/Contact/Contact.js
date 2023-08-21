import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@material-ui/core'
import {Instagram,LinkedIn,Facebook}  from '@material-ui/icons'
import './Contact.css'

const Contact = () => {
  return (
    <Element className="contact" id='Contact'>
      <h1 className='con'>CONTACT</h1>

    <div className='contact_container'>
      <p>
        Email:<span>ilakki1212@gmail.com</span>
        </p>
        <p>Github Username :<span>IlakkiyaUSquare</span></p>
        <div className='contact__icons'>
          <a href='google.com'>
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href='google.com'>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href='google.com'>
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
        </div>
        </div>
        </Element>
  )
}
export default Contact