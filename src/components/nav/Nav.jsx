import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import ScrollspyNav from 'react-scrollspy-nav'  

const Nav = () => {
  return (
    <ScrollspyNav
    scrollTargetIds={["home", "about", "services", "contact"]}
    activeNavClass="active"
    offset={-150}
    scrollDuration = "10"
    >
    <nav>
      <a href="#home" ><AiOutlineHome/></a>
      <a href="#about" ><AiOutlineUser/></a>
      <a href="#services" ><RiServiceLine/></a>
      <a href="#contact" ><BiMessageSquareDetail/></a>
    </nav>
  </ScrollspyNav>
  )
}

export default Nav