import React, { useReducer } from 'react';
import { counterReducer, initialState } from '../reducer/counterReducer';
import '../styles/counter.css'; // optional styling

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h2>Counter: {state.count}</h2>
      <div className="btn-group">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
