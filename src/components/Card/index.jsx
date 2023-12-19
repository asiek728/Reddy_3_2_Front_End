import React, { useState, useEffect } from 'react'
import PassedButtons from '../PassedButtons'
import './style.css'

const Card = ({ cards, cardIncrement, setCardIncrement }) => {
  const [flip, setFlip] = useState(false)
  function changeSide() {
    setFlip(!flip)
  }
  async function deleteCard(){
    console.log(cards[cardIncrement]._id)
    const options = {
      method: "DELETE",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }

    }
    try{
      console.log("hit")
      const destroy = await fetch(`http://localhost:3000/flashCards/${cards[cardIncrement]._id}`,options)
      console.log("Deleted Stack: "+ cards.frontSide)
      window.location.reload(true)
    }catch(error){
      console.log(error.message)
      
    }

  }

  return (
    <>
      <div role="displayCard" className='flashCardDiv' onClick={changeSide}>
        {flip ? <p>{cards[cardIncrement].frontSide}</p> : <p>{cards[cardIncrement].backSide}</p>}
      </div>

      <PassedButtons cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} card={cards[cardIncrement]}/><br />
      <button onClick={deleteCard}>Delete card</button>
    </>
  )
}

export default Card
