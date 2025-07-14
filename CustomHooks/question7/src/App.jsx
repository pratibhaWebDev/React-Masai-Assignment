import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerComponent from './component/TimerComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimerComponent/>
    </>
  )
}

export default App
