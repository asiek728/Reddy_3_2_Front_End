import React, { useState, useEffect } from 'react'
import PassedButtons from '../PassedButtons'
import './style.css'

const Card = ({ cards, cardIncrement, setCardIncrement }) => {
  const [flip, setFlip] = useState(false)

  function changeSide() {
    setFlip(!flip)
  }

  return (
    <>
      <div className='flashCardDiv' onClick={changeSide}>
        {flip ? <p>{cards[cardIncrement].frontSide}</p> : <p>{cards[cardIncrement].backSide}</p>}
      </div>

      <PassedButtons cardIncrement={cardIncrement} setCardIncrement={setCardIncrement}/>
    </>
  )
}

export default Card
