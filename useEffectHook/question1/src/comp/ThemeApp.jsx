import React from 'react'
import ThemedBox from './ThemedBox'
import { useState } from 'react'


const ThemeApp = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      const appStyles = {
        backgroundColor: theme === 'dark' ? '#121212' : '#f9f9f9',
        minHeight: '100vh',
        padding: '40px',
        transition: 'background-color 0.3s ease-in-out',
      };
  return (
    <>
    <div style={appStyles}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      <ThemedBox theme={theme}>Box 1</ThemedBox>
      <ThemedBox theme={theme}>Box 2</ThemedBox>
      <ThemedBox theme={theme}>Box 3</ThemedBox>
    </div>
    </>

  )
}

export default ThemeApp