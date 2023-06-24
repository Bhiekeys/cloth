import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
 

  return (
    <div className='font-bodyFont'>
      <Header/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App
