import React, { useEffect, useState } from 'react'
import { Card } from "../../components"
import { useParams } from 'react-router'
import axios from 'axios'

const CardsPage = () => {
  const [cards, setCards] = useState([])
  const [cardIncrement, setCardIncrement] = useState(0)
  const id = useParams()

  useEffect(() => {
    const fetchCards = async () => {
      console.log("check 1")
      const { data } = await axios.get(`http://localhost:3000/flashCards/${id.id}`)
      setCards(data)
      console.log("check 2", data)

    }
    fetchCards()
  }, [])




  function displayNextCard() {
    return cards
  }
  function displayCards() {
    return (
      <>
        <Card cards={cards} cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} />
      </>)
  }

  // useEffect(()=>{
  //   displayNextCard()
  // },[cardIncrement])

  return (
    <>
      <h1>CardsPage</h1>
      <div>{displayCards()}</div>
    </>
  )
}

export default CardsPage
