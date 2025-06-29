import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './component/ProfileCard'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <ProfileCard
        name="Aditi Verma"
        age={28}
        bio="Full-stack developer who loves clean code, creative UI/UX, and building web apps that make life easier. Passionate about React and always eager to learn more."
      />
      <ProfileCard age={26}/>
    </>
  )
}

export default App
