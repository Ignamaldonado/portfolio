import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { LanguageContextType } from '../../context/types'
import './Footer.css'

const Footer = () => {
  const {language} = useContext(LanguageContext) as LanguageContextType
  return (
    <div className='footer'>
            Ignacio Maldonado - 2023 || {language === 'en' ? 'Thank you for reading' : 'Gracias por leer'}
    </div>
  )
}

export default Footer