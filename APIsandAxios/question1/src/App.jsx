import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const fetchData=async ()=>{
    try {
      const response=await fetch("https://fakestoreapi.com/products")
      const data=await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
