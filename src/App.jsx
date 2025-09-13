import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './Loader'
import Hero from './Hero'
import Scrollup from "./Scrollup";

function App() {

  return (
    <>
      <Loader />
      <main className='main'>
        <Hero />
      </main>
      <Scrollup />

    </>
  )
}

export default App
