import { useState } from 'react'

import './App.css'

function App() {
  
  //let counter =10
  
  const [counter,setCounter]= useState(0)


  const addValue=()=>{
    setCounter(counter+1)
    }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>React Project 2</h1>
     <h2>Counter value: {counter} </h2>
     <button
     onClick={addValue}>Add value</button>{' '}
     <button
     onClick={removeValue}>Remove value</button>
     </>
  )
}

export default App
