import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  function colorChange(){
   setColor(prev=>prev==="yellow"?"green":"yellow")
}

  return (
    <>
    <h1 style={{color:color}}>Color Changer</h1>
      <div style={{background:color,padding:"2rem"}}>
        
        <button onClick={colorChange}>
          Change Color
        </button>
      </div>
    </>
  )
}

export default App
