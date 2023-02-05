import {ThemeContext} from './ThemeContext'
import { props } from '../interfaces/interfaces'
import { useState } from 'react'

const initialState: string = 'light'

export const ThemeProvider = ({ children }: props) => {
    const [theme, setTheme] = useState(initialState)

    const handleTheme = (theme: string) => {
        if (theme === 'light') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const data = {theme, handleTheme}
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}