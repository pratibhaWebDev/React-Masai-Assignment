import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    inputRef.current.focus();                        
    inputRef.current.style.backgroundColor = '#e0f7fa'; 
    setFocused(true);                                
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleFocus}>Focus Input</button>

      {focused && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          Focused!
        </div>
      )}
    </div>
    </>
  )
}

export default App
