import React, { useEffect, useState } from 'react'
import { Card } from "../../components"
import { useParams } from 'react-router'
import axios from 'axios'

const CardsPage = () => {
  const [cards, setCards] = useState([])
  const [cardIncrement, setCardIncrement] = useState(0)
  const id = useParams()
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await axios.get(`http://localhost:3000/flashCards/${id.id}`)
      setCards(data)
      setLoading(false)
    }
    fetchCards()
  }, [])


  function displayCards() {
    return (
      <>
        {
          loading
            ? <p style={{ marginTop: "200px", fontSize: "60px" }}>Loading...</p>
            : <Card cards={cards} cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} />
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
