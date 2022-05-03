import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/"><a className='no-padding' href="#home" ><AiOutlineHome/></a></Link>
    </nav>
  )
}

export default Nav