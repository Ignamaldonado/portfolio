import { useState } from 'react'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import ProjectsPage from './components/ProyectsPage/ProjectsPage'
import AboutMe from './components/AboutMe/AboutMe'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/ThemeProvider'
import ContactPage from './components/ContactPage/ContactPage'
import Footer from './components/Footer/Footer'

//ACORDARSE DE SACAR EL BOTON DE PAGINA DEL PROYECTO DEL PORTFOLIO

function App() {


  return (
    <LanguageProvider>
    <ThemeProvider>
    <Header />
    <MainPage />
    <ProjectsPage />
    <AboutMe />
    <ContactPage/>
    <Footer/>
    </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
