import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const item=["React","CSS","JavaScript"]

  return (
    <>
    <h1>My Tech Stack</h1>
      <ul>
       {item.map((items,index)=>(
        <li key={index} >{items}</li>
       ))}
      </ul>
    </>
  )
}

export default App
