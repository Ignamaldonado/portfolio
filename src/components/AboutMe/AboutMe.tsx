import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { ThemeContext } from '../../context/ThemeContext'
import { LanguageContextType, ThemeContextType } from '../../context/types'
import DownArrow from '../DownArrow/DownArrow'
import html from '../../assets/logos/html.png'
import css from '../../assets/logos/css.png'
import js from '../../assets/logos/js.png'
import java from '../../assets/logos/java.png'
import c from '../../assets/logos/c.png'
import nodejs from '../../assets/logos/nodejs.png'
import typescript from '../../assets/logos/typescript.png'
import react from '../../assets/logos/react.png'
import git from '../../assets/logos/git.png'
import mysql from '../../assets/logos/mysql.png'
import Nextjs from '../../assets/logos/Nextjs.png'
import redux from '../../assets/logos/redux.png'
import sass from '../../assets/logos/sass.png'
import sequelize from '../../assets/logos/sequelize.png'
import jest from '../../assets/logos/jest.png'
import t from '../../translations/translation'
import me from '../../assets/me.png'
import './AboutMe.css'
import {motion} from 'framer-motion'

type TechProps = {
  image: string,
  name: string,
}

const AboutMe = () => {
  const { language } = useContext(LanguageContext) as LanguageContextType
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const initialPos = {opacity: 0, y: -40}
  const finalPos = {opacity: 1, y: 0}

  return (
    <div className={`about-page-container ${theme === 'dark' ? 'dark' : ''}`} id='about-section'>
      <div className='about-flex'>
      <div className={`about-me ${theme === 'dark' ? 'dark' : ''}`}>
            <h1>{language === 'en' ? t.en.aboutmetitle : t.es.aboutmetitle}</h1>
            <div className='about-me-container'>
                <motion.div 
                initial={initialPos}
                whileInView={finalPos}
                viewport={{ once: true }}
                transition={{delay: 0.6}}
                className='about-me-img'
                >
                    <img src={me} alt='me'/>
                </motion.div>
                <motion.div 
                initial={initialPos}
                whileInView={finalPos}
                viewport={{ once: true }}
                transition={{delay: 0.6}}
                className='about-me-text'
                >
                <p>{language === 'en' ? t.en.aboutmetext1 : t.es.aboutmetext1}</p>
                <br/>
                <p>{language === 'en' ? t.en.aboutmetext2 : t.es.aboutmetext2}</p>
                <br />
                <p>{language === 'en' ? t.en.aboutmetext3 : t.es.aboutmetext3}</p>
                </motion.div>             
            </div>
       </div>
       <div className={`techs-use ${theme === 'dark' ? 'dark' : ''}`}>
            <h1>{language === 'en' ? t.en.techstitle : t.es.techstitle}</h1>
            <div className='techs-container'>
              <Tech image={html} name={'HTML'} />
              <Tech image={css} name={'CSS'} />
              <Tech image={js} name={'JavaScript'} />
              <Tech image={typescript} name={'TypeScript'} />
              <Tech image={java} name={'Java'} />
              <Tech image={c} name={'C++'} />
              <Tech image={nodejs} name={'NodeJS'} />
              <Tech image={react} name={'React'} />
              <Tech image={redux} name={'Redux'} />
              <Tech image={Nextjs} name={'NextJS'} />
              <Tech image={mysql} name={'MySQL'} />
              <Tech image={git} name={'GIT'} />
              <Tech image={sass} name={'SASS'} />
              <Tech image={sequelize} name={'Sequelize'} />
              <Tech image={jest} name={'Jest'} />
            </div>
       </div>
      </div>
      <br/><br/>
      <div className='main-arrow-container'>
            <DownArrow />
        </div>
    </div>
  )
}

export default AboutMe

function Tech(props: TechProps) {

  const initialPos = {opacity: 0, y: -40}
  const finalPos = {opacity: 1, y: 0}

  return (
    <motion.div 
    initial={initialPos}
    whileInView={finalPos}
    viewport={{ once: true }}
    transition={{delay: 0.6}}
    className='tech-card'
    >
      <div className='tech-img'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='tech-text'>{props.name}</div>
    </motion.div>
  )
}