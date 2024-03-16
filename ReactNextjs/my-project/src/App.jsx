import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
    <Navbar/>
    
    <div className='flex gap-4 my-4 mx-24'>
      <Card title="Card1" description = "Card1 Desc"/>
      <Card title="Card1" description = "Card1 Desc"/>      
      <Card title="Card1" description = "Card1 Desc"/>
      <Card title="Card1" description = "Card1 Desc"/>
      </div>
    <Footer/>
    </>
  )
}

export default App
