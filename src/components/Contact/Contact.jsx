import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'

const contact = () => {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jana.straka@seznam.cz</h5>
            <a href="mailto:jana.straka@seznam.cz">Poslat zprávu</a>
          </article>
          <article className="contact_option">
            <BsTelephone className='contact_option-icon'/>
            <h4>Telefon</h4>
            <h5>601 531 249 </h5>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Jana Strmisková</h5>
            <a href="https://m.me/jana.strmiskova.52">Poslat zprávu</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default contact