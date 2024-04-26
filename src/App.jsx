import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Events from './Components/Events/Events'
import Blog from './Components/Blog/Blog'
import Reviews from './Components/Reviews/Reviews'
import MenuContainer from './Components/MenuContainer/MenuContainer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
            <>
            <Section1 />
            <Events />
            <Blog />
            <Reviews />
            </>
          }/>
        <Route path='/menu' element={<MenuContainer />} />
      </Routes>
      
    </>
  )
}

export default App
