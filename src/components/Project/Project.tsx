import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import './Project.css'
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../context/types';
import portfolio from '../../assets/portfolio.png'

type ProjectProps = {
    title: string,
    text: string,
    image: string,
    techs: string[],
    github: string,
    page: string
}

type TechButtonProps = {
    tech: string
}

const Project = (props: ProjectProps) => {
  const {theme} = useContext(ThemeContext) as ThemeContextType

  return (
    <motion.div 
    className={`project-card`} 
    whileHover={{scale:1.1}}
    >
        <div className='card-image'>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className='card-title'>
            <p>{props.title}</p>
        </div>
        <div className='card-text'>
            <p>{props.text}</p>
        </div>
        <div className='card-techs'>
            {props.techs ? props.techs.map((tech) => <TechButton tech={tech} />): null}
        </div>
        <div className='card-buttons'>
            <motion.button
            whileHover={{scale: 1.3}}
            ><a 
            href={props.github}      
            target="_blank" 
            rel="noopener noreferrer"  
            className={theme === 'dark' ? 'dark' : ''}
            ><FontAwesomeIcon icon={faGithub} /></a></motion.button>
            {props.image === portfolio ? null : <motion.button
            whileHover={{scale: 1.3}}
            ><a 
            href={props.page} 
            className={theme === 'dark' ? 'dark' : ''}
            target="_blank" 
            rel="noopener noreferrer" 
            ><FontAwesomeIcon icon={faFile} /></a></motion.button> }
        </div>
    </motion.div>
  )
}

function TechButton(props: TechButtonProps) {
    return (
        <div className={`tech-button ${props.tech}`}>
            <p>{props.tech}</p>
        </div>
    )
}

export default Project