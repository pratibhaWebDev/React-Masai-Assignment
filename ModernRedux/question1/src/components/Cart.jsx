import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../features/cartSlice'

const sampleProducts = [
  { id: 1, name: 'iPhone', price: 900 },
  { id: 2, name: 'Headphones', price: 200 },
  { id: 3, name: 'Charger', price: 50 },
]

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Shopping Cart</h2>

      <h3>Products</h3>
      {sampleProducts.map((product) => (
        <div key={product.id} style={{ margin: '10px 0' }}>
          <strong>{product.name}</strong> - ₹{product.price}
          <button style={{ marginLeft: '10px' }} onClick={() => dispatch(addItem(product))}>Add</button>
          <button style={{ marginLeft: '5px' }} onClick={() => dispatch(removeItem(product.id))}>Remove</button>
        </div>
      ))}

      <h3>Cart Items</h3>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  )
}

export default Cart
