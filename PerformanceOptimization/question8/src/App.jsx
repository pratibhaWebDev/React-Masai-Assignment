import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [item, toggleItem] = useToggleItems(['A', 'B', 'C'], 1);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Item: {item}</h1>
      <button onClick={toggleItem}>Toggle</button>
    </div>
    </>
  )
}

export default App
