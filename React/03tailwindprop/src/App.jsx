import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-2 rounded-md '>Vite with Tailwind</h1>
      <Card username="Mithil" />
      <Card/>
    </>
  )
}

export default App
