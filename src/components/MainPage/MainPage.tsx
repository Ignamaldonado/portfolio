import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeContextType } from '../../context/types'
import { LanguageContext } from '../../context/LanguageContext'
import { LanguageContextType } from '../../context/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'
import DownArrow from '../DownArrow/DownArrow'
import t from '../../translations/translation'
import './MainPage.css'

const MainPage = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const {language } = useContext(LanguageContext) as LanguageContextType

  return (
    <div className={`main-page-container ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`main-presentation ${theme === 'dark' ? 'dark' : ''}`}>
        <h1>{'</>'}</h1>
        <h1>Ignacio Maldonado</h1>
        <h1>{language === 'en' ? t.en.mainJob : t.es.mainJob}</h1>
        <br/>
            <ButtonLinks />
        <br/><br/><br/><br/>
        <h3>{language === 'en' ? t.en.mainPresentation1 : t.es.mainPresentation1}</h3>
        <h3>{language === 'en' ? t.en.mainPresentation2 : t.es.mainPresentation2}</h3>
        <h6>{language === 'en' ? t.en.mainPresentation3 : t.es.mainPresentation3}</h6>
        <br/><br/><br/><br/>
        <h3>{language === 'en' ? t.en.mainScrollDown : t.es.mainScrollDown}</h3>
        <br/>
      </div>
      <div className='main-arrow-container'>
            <DownArrow />
        </div>
    </div>
  )
}

function ButtonLinks() {

    const { theme } = useContext(ThemeContext) as ThemeContextType
    const {language } = useContext(LanguageContext) as LanguageContextType

    return (
        <div className='main-buttons-container'>
            <a 
            href="https://www.linkedin.com/in/ignaciomaldonadoduarte/" 
            target="_blank" 
            rel="noopener noreferrer"
            ><div className={`main-button ${theme === 'dark' ? 'dark' : ''}`}>
                <motion.button
                whileHover={{scale: 1.1}}
                ><FontAwesomeIcon icon={faLinkedin}/><div>Linkedin</div></motion.button>
            </div></a>
            <a 
            href="https://github.com/Ignamaldonado" 
            target="_blank" rel="noopener noreferrer" 
            ><div className={`main-button ${theme === 'dark' ? 'dark' : ''}`}>
                <motion.button
                whileHover={{scale: 1.1}}
                ><FontAwesomeIcon icon={faGithub}/><div>Github</div></motion.button>
            </div></a>
            <a 
            href="https://drive.google.com/file/d/1Sxvn2JwF1QZ3WzFnsT8p1NyiT506cskg/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            ><div className={`main-button ${theme === 'dark' ? 'dark' : ''}`}>
                <motion.button
                whileHover={{scale: 1.1}}
                ><FontAwesomeIcon icon={faFileLines}/><div>{language === 'en' ? 'Resume' : 'Curriculum'}</div></motion.button>
            </div></a>
        </div>
    )
}

export default MainPage