import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeApp from './comp/ThemeApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeApp/>
    </>
  )
}

export default App
