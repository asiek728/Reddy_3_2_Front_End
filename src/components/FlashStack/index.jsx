import React from 'react'
import './style.css'

const FlashStack = ({ stack }) => {
  return (
    <div className='stackDiv'>
    <h2>{ stack.topic } </h2>
    <p>{ stack.cardCount } cards </p>
    <button>Learn</button>
  </div>
  )
}

export default FlashStack
