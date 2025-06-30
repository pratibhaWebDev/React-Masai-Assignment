import React from 'react'

const ThemedBox = ({ theme, children }) => {
    const styles = {
        backgroundColor: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '20px',
        margin: '10px 0',
        borderRadius: '8px',
        textAlign: 'center',
      };
    
  return (
    <div style={styles}>{children}</div>
  )
}

export default ThemedBox