import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './componets/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cart title="Cart 1">
        <h1>This is Cart 1</h1>
        <p>Some description or product info goes here.</p>
      </Cart>

      <Cart title="Cart 2">
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </Cart>

      <Cart title="Cart 3">
        <img src="https://via.placeholder.com/100" alt="sample" />
        <p>Image inside a card</p>
      </Cart>
    </>
  )
}

export default App
