import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './Intro/Intro.jsx'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skill/Skill'
import Project from './project/Project'
import Footer from './footer/footer'

import Aos from "aos";
import "aos/dist/aos.css"

import './App.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div >
      <Intro />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Education />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Project />
      </div>
      <Footer />
    </div>
  )
}

export default App
