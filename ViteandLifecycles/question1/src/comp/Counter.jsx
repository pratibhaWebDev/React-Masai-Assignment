import React from 'react'
import { useState } from 'react'


const Counter = ({ Value }) => {

    const [count, setCount] = useState(Value)

    function handleIncrement(){
        setCount(count + 1)
    }
    function handleDecrement(){
        setCount(count - 1)
    }
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} disabled={count===0}>Decrement</button>
        </>
    )
}

export default Counter