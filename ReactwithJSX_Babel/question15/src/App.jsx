import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
    <div>

    
     <nav>
     <button onClick={() => setPage("home")}>Home</button>
     <button onClick={()=>setPage("about")}>About</button>
     <button onClick={()=>setPage("contact")}>Contact</button>

     </nav>

     {page === "home" && <h1>Welcome to Home</h1>}
     {page === "about" && <h1>Welcome to About</h1>}
     {page === "contact" && <h1>Welcome to Contact</h1>}
     </div>
    </>
  )
}

export default App
