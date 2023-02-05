import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeContextType } from '../../context/types'
import './downArrow.css'

const downArrow = () => {

    const {theme} = useContext(ThemeContext) as ThemeContextType

return (
<svg className={`arrows ${theme === 'dark' ? 'dark' : ''}`}>
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
  )
}

export default downArrow