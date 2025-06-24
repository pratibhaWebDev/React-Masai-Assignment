import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState([])


  const loadData= async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProduct(data)
  }

  return (
    <>
    <div style={{textAlign:"center"}}>
     <button onClick={loadData}>Fetch Data</button>
     {product.length > 0 && (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <ul style={{listStyle:'none', padding: 0, marginTop: "30px" }}>
          {product.map((item, index) => (
           <li key={item.id} style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "300px",
            margin: "auto"
          }}>{item.title}
          
            <img  style={{width:"150px"}} src={item.image} alt="" />
            <strong>${item.price}</strong>
            <hr />
            </li>
            
          ))}
        </ul>
      </div>
    )}
    </div>
    </>
  )
}

export default App
