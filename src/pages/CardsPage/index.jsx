import React, { useEffect, useState } from 'react'
import { Card } from "../../components"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext"
import { useTimer } from '../../context/TimerContext';

import axios from 'axios'

const CardsPage = () => {
  const [cards, setCards] = useState([])
  const [stack, setStack] = useState([])

  const [cardIncrement, setCardIncrement] = useState(0)
  const id = useParams()
  const [loading, setLoading] = useState(true);
  const [loadingStack, setLoadingStack] = useState(true);

  const { user } = useAuthContext()
  // const { timer, setTimer } = useTimer()

  // console.log("date" , date)

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await axios.get(`http://localhost:3000/flashCards/${id.id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      setCards(data)
      // console.log(id.id)
      setLoading(false)
    }
    if (user) {
      fetchCards(user)
    }
  }, [cards, user])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3000/flashStacks/${id.id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      // setTimer(data.stackTimer)
      setStack(data)
      setLoadingStack(false)
    }
    if (user) {
      fetchData(user)
    }
  }, [loadingStack])

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
              < Card cards={cards} cardIncrement={cardIncrement} setCardIncrement={setCardIncrement} stack={stack}/>
        }
      </>)
  }

  return (
    <div id='flashcardTest'>
      <h1> ... flashcards</h1>
      <h2>Press on card to flip it</h2>
      <div>
        {displayCards()}
      </div>
    </div>
  )
}

export default CardsPage
