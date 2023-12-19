import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const FlashStack = ({ stack }) => {
  return (
    <div role='stackDiv' className='stackDiv'>
      <h2>{stack.topic} </h2>
      <p>{stack.cardCount} cards </p>
      <Link to={`${stack._id}`} key={stack._id}>
        <button>learn</button>
        <button>Add new flashcard</button>
      </Link>
    </div>
  )
}

export default FlashStack
