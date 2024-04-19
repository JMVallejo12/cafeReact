import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Events from './Components/Events/Events'

function App() {

  return (
    <>
      <Navbar />
      <Section1 />
      <Events />
    </>
  )
}

export default App
