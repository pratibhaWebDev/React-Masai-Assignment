import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialProfileCard from './comp/SocialProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SocialProfileCard/>
    </>
  )
}

export default App
