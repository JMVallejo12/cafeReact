import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Events from './Components/Events/Events'
import Blog from './Components/Blog/Blog'
import Reviews from './Components/Reviews/Reviews'

function App() {

  return (
    <>
      <Navbar />
      <Section1 />
      <Events />
      <Blog />
      <Reviews />
    </>
  )
}

export default App
