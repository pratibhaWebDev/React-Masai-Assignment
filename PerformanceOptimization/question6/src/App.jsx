import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './components/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Test Custom Hook</h1>
      <ContactForm />
    </div>
    </>
  )
}

export default App
