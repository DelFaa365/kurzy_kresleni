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
      <form action="">
            <label htmlFor="name">Jméno</label>
            <input type="text" name='name' placeholder='Vaše jméno' />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Váš email' />
            <label htmlFor="message">Zpráva</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Vaše zpráva'></textarea>
            <button className='btn btn-primary' >Poslat</button>
          </form>
        <div className="contact__options">
          <article className="contact_option">
            <BsTelephone className='contact_option-icon'/>
            <h4>Telefon</h4>
            <h5>601 531 249 </h5>
            <a href=""></a>
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