import React from 'react'
import React, { useReducer } from 'react';
import { themeReducer, initialState } from '../reducers/themeReducer';

function ThemeToggle() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const styles = {
      backgroundColor: state.theme === 'light' ? '#ffffff' : '#333333',
      color: state.theme === 'light' ? '#000000' : '#ffffff',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    };
  
    return (
      <div style={styles}>
        <h1>Current Theme: {state.theme}</h1>
        <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          Toggle Theme
        </button>
      </div>
    );
}

export default ThemeToggle