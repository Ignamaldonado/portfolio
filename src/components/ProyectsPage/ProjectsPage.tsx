import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeContextType, LanguageContextType } from '../../context/types'
import Project from '../Project/Project'
import DownArrow from '../DownArrow/DownArrow'
import CryptoQuote from '../../assets/CryptoQuote.png'
import BillsController from '../../assets/BillsController.png'
import SomosMas from '../../assets/SomosMas.png'
import portfolio from '../../assets/portfolio.png'
import './projectsPage.css'
import t from '../../translations/translation'


const ProjectsPage = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const { language } = useContext(LanguageContext) as LanguageContextType  


  return (
    <div className={`projects-page-container ${theme === 'dark' ? 'dark' : ''}`} id='projects-section'>
        <br/>
        <h1>{language === 'en' ? 'My projects' : 'Mis proyectos'}</h1>
        <div className="projects-container">
            <Project
            page='https://alkemy-ong.fazcue.vercel.app/'
            github='https://github.com/Ignamaldonado/SomosMas' 
            title='Somos Mas ONG' 
            text={language === 'en' ? t.en.somosmas : t.es.somosmas} 
            image={SomosMas} 
            techs={['JavaScript', 'NodeJS', 'Express', 'MySQL' , 'Emailer', 'Sequelize' ,'Jest' ,'React', 'Redux']} 
            />
            <Project
            page=''
            github='https://github.com/Ignamaldonado/portfolio' 
            title={language === 'en' ? t.en.portfolioTitle : t.es.portfolioTitle} 
            text={language === 'en' ? t.en.portfolioText : t.es.portfolioText} 
            image={portfolio} 
            techs={['TypeScript', 'CSS' ,'React', 'ContextAPI', 'Framer-Motion']}
            />
            <Project
            page='https://fabulous-baklava-71fbbd.netlify.app/'
            github='https://github.com/Ignamaldonado/fullstackjs-alkemy-challenge' 
            title='Bills Controller' 
            text={language === 'en' ? t.en.billscontroller : t.es.billscontroller} 
            image={BillsController} 
            techs={['JavaScript', 'NodeJS', 'Express', 'MySQL', 'Sequelize', 'React']}/>
            <Project
            github='https://github.com/Ignamaldonado/CryptoQuote'
            page='https://spectacular-dragon-d4d5f2.netlify.app/' 
            title='CryptoQuote' 
            text={language === 'en' ? t.en.cryptoquote : t.es.cryptoquote} 
            image={CryptoQuote} 
            techs={['JavaScript', 'React', 'API']}
            />
        </div>
        <div className='main-arrow-container'>
            <DownArrow />
        </div>
    </div>
  )
}

export default ProjectsPage 