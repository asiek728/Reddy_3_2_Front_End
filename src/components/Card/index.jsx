import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PassedButtons from '../PassedButtons'
import './style.css'
import axios from 'axios'
import { useAuthContext } from "../../hooks/useAuthContext"
import { useScore } from '../../context/ScoreContext';

const Card = ({ cards, cardIncrement, setCardIncrement }) => {
  const [flip, setFlip] = useState(true)
  const [cardCount, setCardCount] = useState('')
  const id = useParams()
  const { score, setScore } = useScore()
  const { user } = useAuthContext()

  useEffect(() => {
    const displayCardsNo = async () => {
      const { data } = await axios.get(`http://localhost:3000/flashStacks/${id.id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      setCardCount(data.cardCount - 1)
    }
    if (user) {
      displayCardsNo(user)
    }
  }, [user])


  function changeSide() {
    setFlip(!flip)
  }
  async function deleteCard() {
    console.log(cards[cardIncrement]._id)
    const options = {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    }
    try {
      const destroy = await fetch(`http://localhost:3000/flashCards/${cards[cardIncrement]._id}`, options)
      console.log("Deleted Stack: " + cards.frontSide)
      window.location.reload(true)
    } catch (error) {
      console.log(error.message)
    }
    await decreaseStackCardsNumber()
  }


  async function decreaseStackCardsNumber() {
    const options = {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        "cardCount": cardCount
      })
    }

    const response = await fetch(
      `http://localhost:3000/flashStacks/${id.id}`,
      options
    );
  }

  return (
    <>
      {
        cards.length > cardIncrement
          ?
          <>
            <div role="displayCard" className='flashCardDiv' onClick={changeSide}>
              {flip ? <p>{cards[cardIncrement].frontSide}</p> : <p>{cards[cardIncrement].backSide}</p>}
            </div>

            <PassedButtons cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} card={cards[cardIncrement]} /><br />
            <button onClick={deleteCard}>Delete card</button>
          </>
          :
          <>
            <p style={{ marginTop: "100px", fontSize: "60px" }}>No more cards left</p>
            <p style={{ marginTop: "100px", fontSize: "60px" }}>Score: {score} / {cardCount+1}</p>
          </>
      }
    </>
  )
}

export default Card
