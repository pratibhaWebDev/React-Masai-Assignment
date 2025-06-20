import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com"
  };

  return (
    <>
     <div>
      <h1>Welcome</h1>
     <User user={user}/>
    </div>
    </>
  )
}

export default App
