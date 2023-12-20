import React, { useEffect, useState } from 'react'
import { Card } from "../../components"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext"

import axios from 'axios'

const CardsPage = () => {
  const [cards, setCards] = useState([])
  const [cardIncrement, setCardIncrement] = useState(0)
  const id = useParams()
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await axios.get(`http://localhost:3000/flashCards/${id.id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      setCards(data)
      setLoading(false)
    }
    if (user) {
      fetchCards(user)
    }
  }, [cards, user])

  function displayCards() {
    return (
      <>
        {
          loading
            ? <p style={{ marginTop: "200px", fontSize: "60px" }}>Loading...</p>
            :
            cards.length < 1
              ? <>
                <p style={{ marginTop: "200px", fontSize: "60px" }}>The stack is empty...</p>
                <Link to={`new`} key={id.id}>
                  <button>Add card</button>
                </Link>
              </>
              :
              < Card cards={cards} cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} />
        }
      </>)
  }

  return (
    <>
      <h1> ... flashcards</h1>
      <h2>Press on card to flip it</h2>
      <div>
        {displayCards()}
      </div>
    </>
  )
}

export default CardsPage
