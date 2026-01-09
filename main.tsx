import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#6366f1' }}>🚀 Inceptora</h1>
      <p>Next-gen professional networking platform built with Figma AI + Supabase. Connect entrepreneurs, startups, and builders.</p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            background: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}

// RENDER TO PAGE
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
