import React, { useState, useEffect } from 'react'
import PassedButtons from '../PassedButtons'
const Card = ({ cards, cardIncrement, setCardIncrement }) => {
  const [flip, setFlip] = useState(false)

  function changeSide() {
    setFlip(!flip)
  }

  console.log("check3", cards)

  return (
    <>
      <div>
        {/* {flip ? cards[cardIncrement].frontSide : cards[cardIncrement].backSide} */}
        {/* {cards[0].backSide}
        <button onClick={changeSide}>flip</button> */}
        test
      </div>

      <PassedButtons />
    </>
  )
}

export default Card
