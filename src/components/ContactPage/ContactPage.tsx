import React, { useContext, useState } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context/ThemeContext'
import { LanguageContextType, ThemeContextType } from '../../context/types'
import t from '../../translations/translation'
import './ContactPage.css'
import {motion} from 'framer-motion'
import { LanguageContext } from '../../context/LanguageContext'

const ContactPage = () => {
  const {theme} = useContext(ThemeContext) as ThemeContextType
  const {language} = useContext(LanguageContext) as LanguageContextType
  const [active, setActive] = useState(false)

  const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_vms8skd', 'template_cvvq4ny', e.target ,'mhPPqxr0ab7N6MvwU')
            .then(response => setActive(true))
  }

  return (
    <div className={`contact-page-container ${theme === 'dark' ? 'dark' : ''}`} id='contact-section'>
        <h1>{language === 'en' ? t.en.contacttitle : t.es.contacttitle}</h1>
        {active ? <h1>{language === 'en' ? t.en.contactsend : t.es.contactsend}</h1> : null}
        <form className='contact-form' onSubmit={sendEmail}>
            <div className='contact-input'>
                <label htmlFor='name'>{language === 'en' ? t.en.contactname : t.es.contactname}</label><br/>
                <motion.input whileFocus={{scale: 1.2}} type='text' name='name' placeholder='John Doe' />
            </div><br/>
            <div className='contact-input'>
                <label htmlFor='email'>{language === 'en' ? t.en.contactemail : t.es.contactemail}</label><br/>
                <motion.input whileFocus={{scale: 1.2}} type='text' name='email' placeholder='Example@example.com' />
            </div><br/>
            <div className='contact-message'>
                <label htmlFor='message'>{language === 'en' ? 'Your message' : 'Tu mensaje'}</label><br/>
                <textarea name='message' rows={4} />
            </div>
            <button type='submit' className='submit-button'>{language === 'en' ? 'Send' : 'Enviar'}</button>
        </form>
    </div>
  )
}

export default ContactPage