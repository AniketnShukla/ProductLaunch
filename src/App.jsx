import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  // function setHeight (){
  //  document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
  // }
  // useEffect(()=>setHeight())
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
