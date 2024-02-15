import React from 'react'
import Card from '../Components/Shared/Card.jsx'
import { Link } from 'react-router-dom'


function About() {
  return (
    <Card> 
      <div className='About'>
        <h1>About</h1>
        <p>works like a charm!</p>
        <p>version 1.0</p>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    </Card>
  )
}

export default About