import React, {useContext, useMemo, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'
import t from '../../translations/translation'
import logo from '../../assets/logo.png';
import './header.css';
import { LanguageContext } from '../../context/LanguageContext';
import { LanguageContextType } from '../../context/types';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../context/types';
import useGetData from '../../hooks/useGetData';

export default function header() {
    const {language} = useContext(LanguageContext) as LanguageContextType
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const [active, setActive] = useState(false)

    console.log(active)

  return (
    <div className={`header-container ${theme === 'dark' ? 'dark' : ''}`}>
        <div className='logo-container'>
            <img src={logo} alt='logo' />
        </div>
        <div className="header-links"  
        >
            <nav>
                <motion.li
                whileHover={{scale:1.1}}
                ><a href="https://www.linkedin.com/in/ignaciomaldonadoduarte/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''}><FontAwesomeIcon icon={faLinkedin} /></a></motion.li>
                <motion.li
                whileHover={{scale:1.1}}
                ><a href="https://github.com/Ignamaldonado" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''}><FontAwesomeIcon icon={faGithub} /></a></motion.li>
                <motion.li
                whileHover={{scale:1.1}}
                ><a href="https://drive.google.com/file/d/1Sxvn2JwF1QZ3WzFnsT8p1NyiT506cskg/view" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''}><FontAwesomeIcon icon={faFileLines} /></a></motion.li>
            </nav>
        </div>
        <div className='header-content'>
                <div><a className={theme === 'dark' ? 'dark' : ''} href="#projects-section">{language === 'en' ? t.en.workHeader : t.es.workHeader}</a></div>
                <div><a className={theme === 'dark' ? 'dark' : ''} href="#about-section">{language === 'en' ? t.en.aboutHeader : t.es.aboutHeader}</a></div>
                <div><a className={theme === 'dark' ? 'dark' : ''} href="#contact-section">{language === 'en' ? t.en.contactHeader : t.es.contactHeader}</a></div>
        </div>
        <div className='colormode-button-container'>
            <ColorModeButton />
            <div className={`colormode-text ${theme === 'dark' ? 'dark' : ''}`}>{language === 'en' ? theme === 'light' ? "Dark" : "Light" : theme === 'light' ? 'Oscuro' : 'Claro' }</div>
        </div>
        <div className='language-button-container'>
        <LanguageButton />
        </div>
        <div className={`burguer-container ${theme === 'dark' ? 'dark' : ''}`} onClick={e => setActive(!active)}>
            {active ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
        {active ?
        <>
                         <div className='burguer-modal-background'></div>
                         <div className={`burguer-modal ${theme === 'dark' ? 'dark' : ''}`}>
           <div className={`burguer-content ${theme === 'dark' ? 'dark' : ''}`}>
                 <div className='burguer-links'>
                 <nav>
                        <motion.li
                        whileHover={{scale:1.1}}
                        ><a href="https://www.linkedin.com/in/ignaciomaldonadoduarte/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''} onClick={e => setActive(!active)}><FontAwesomeIcon icon={faLinkedin} /></a></motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}
                        ><a href="https://github.com/Ignamaldonado" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''} onClick={e => setActive(!active)}><FontAwesomeIcon icon={faGithub} /></a></motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}
                        ><a href="https://drive.google.com/file/d/1Sxvn2JwF1QZ3WzFnsT8p1NyiT506cskg/view" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'dark' : ''} onClick={e => setActive(!active)}><FontAwesomeIcon icon={faFileLines} /></a></motion.li>
                    </nav>
                 </div>
                 <div className='burguer-nav'>
                    <div className={theme === 'dark' ? 'dark' : ''}><a className={theme === 'dark' ? 'dark' : ''} href="#projects-section" onClick={e => setActive(!active)}>{language === 'en' ? t.en.workHeader : t.es.workHeader}</a></div>
                    <div className={theme === 'dark' ? 'dark' : ''}><a className={theme === 'dark' ? 'dark' : ''} href="#about-section" onClick={e => setActive(!active)}>{language === 'en' ? t.en.aboutHeader : t.es.aboutHeader}</a></div>
                    <div className={theme === 'dark' ? 'dark' : ''}><a className={theme === 'dark' ? 'dark' : ''} href="#contact-section" onClick={e => setActive(!active)}>{language === 'en' ? t.en.contactHeader : t.es.contactHeader}</a></div>
                 </div>
                 <div className='burguer-theme'>
                    <ColorModeButton />
                 </div>
           </div> 
        </div>
        </>
        :
        null}

        
    </div>
  )
}

function LanguageButton() {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {language, handleLanguage} = useContext(LanguageContext) as LanguageContextType
    const [languageButton, setLanguageButton] = useState(false)
    const britainURL: string = 'https://restcountries.com/v2/name/britain';
    const spainURL: string = 'https://restcountries.com/v2/name/spain'
    
    const britainFlag = useGetData(britainURL)
    const spainFlag = useGetData(spainURL)

    return (
        <>
            <div className={`language-button ${theme === 'dark' ? 'dark' : ''}`} onClick={e =>{setLanguageButton(!languageButton)}}>
                {language === 'en' ? <>
                <img src={britainFlag} alt='britain' />
                <div>English</div>
                </> 
                :
                <>
                <img src={spainFlag} alt='spain' />
                <div>Español</div>
                </>}
                
            </div>
            <div className={`language-nav ${languageButton ? 'active' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
            {language === 'en' ? <div className='language-changer' onClick={e => {
                setLanguageButton(false)
                handleLanguage('es')
            }}>
                <img src={spainFlag} alt='spain' />
                <div>Español</div>
                </div> 
                :
                <div className='language-changer'onClick={e => {
                    setLanguageButton(false)
                    handleLanguage('en')
                }}>
                <img src={britainFlag} alt='britain' />
                <div>English</div>
                </div>}
            </div>
            
        </>
    )
}

function ColorModeButton() {
    const { handleTheme } = useContext(ThemeContext) as ThemeContextType

    const handleChange = (e: any) => {
        if (e.target.checked) {
            handleTheme('dark')
        } else {
            handleTheme('light')
        }
    }

    return (
        <>
            <div className="colormode-container-home">
        <div className="colormode-selector">
        <label>
            <input type="checkbox" className="input-colormode" onChange={e => handleChange(e)}/>
            <span className="colormode-check"></span>
        </label>
        </div>
        </div>
        </>
    )
}
