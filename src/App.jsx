import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import './components/Header'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import MoreWorks from './components/Moreworks'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Loader />
      <Header />
      <main className='main'>
        <Hero />
        <About />
        <Project />
        <MoreWorks />
        <Contact />
      </main>

    </>
  )
}

export default App
