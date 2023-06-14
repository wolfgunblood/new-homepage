import React from 'react'
import "./App.scss"
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import data from './data/data'
import Article from './components/Article/Article'
const App = () => {

  console.log(data);
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <div className='articles-container'>
        {data.map((item,key)=> (
          <Article item={item} key={key} />
        ))}
      </div>
    </div>

  )
}

export default App