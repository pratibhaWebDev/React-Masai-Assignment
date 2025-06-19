import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Original Title")

  useEffect(()=>{
    document.title = title
  },[title])

  function handleClick(){
    setTitle("New React Title")
  }

  return (
    <>
     <h1>Change React Title</h1>
     <button onClick={handleClick}>Change (react) title</button>
    </>
  )
}

export default App
