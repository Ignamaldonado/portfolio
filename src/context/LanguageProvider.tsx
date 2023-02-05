import { LanguageContext } from './LanguageContext'
import { props } from '../interfaces/interfaces'
import { useState } from 'react'

const initialState: string = "en"

export const LanguageProvider = ({ children }: props) => {
    const [language, setLanguage] = useState(initialState)

    const handleLanguage = (language: string) => {
        if(language === 'en') {
            setLanguage('en')
        } else {
            setLanguage('es')
        }
    }

    const data: object = {language, handleLanguage}

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}