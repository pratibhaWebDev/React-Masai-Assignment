import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("OFF")
  const [count2, setCount2] = useState(0)

  function handleToggle(){
    setCount(prev=>(prev=="OFF"?"NO":"OFF"))
  }
  console.log("data")
  useEffect(() => {
    console.log("red")
  
   
  }, [handleToggle])

  function buttonClick(){
    console.log("button clicked")
    setCount2(prev=>prev+1)
  }
  

  return (
    <>
      <button onClick={buttonClick}>click me{count2}</button>
      <div style={{padding:"100px", border:"2px solid black",margin:"20px",background:count=="OFF"?"red":"green"}}></div>
      <button  onClick={handleToggle}>{count}</button>
    </>
  )
}

export default App
