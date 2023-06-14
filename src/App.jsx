import React from 'react'
import "./App.scss"
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
    </div>

  )
}

export default App