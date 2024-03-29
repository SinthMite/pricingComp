import { useState } from 'react'
import './App.css'
import Section from './section.jsx'
function App() {

  return (
    <div className='title'>
      <h1>Simple traffic-based pricing</h1>
      <p>
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <Section />
    </div>
  )
}

export default App
