import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <>
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {timer}s</h1>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
    </>
  )
}

export default App
