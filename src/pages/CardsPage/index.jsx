import React, {useEffect, useState} from 'react'
import {Card} from "../../components"

const CardsPage = ({stackId}) => {
  const [cards, setCards ] = useState([])
  const [cardIncrement, setCardIncrement] = useState(0)

  async function fetchCards(){
    const response = await fetch(`http://localhost:3000/flashCards/${stackId}`)
    const data = await response.json()
    setCards(data)
  }
  function displayNextCard(){
    return cards
  }
  function displayCards(){
    return cards.map(c => 
      <Card cardIncrement={cardIncrement} setCardIncrement={setCardIncrement}/>)
  }

  useEffect(()=>{
    fetchCards()
  },[])

  useEffect(()=>{
    displayNextCard()
  },[cardIncrement])

  return (
    <>
      <h1>CardsPage</h1>
      <div>{displayCards()}</div>
    </>
  )
}

export default CardsPage
