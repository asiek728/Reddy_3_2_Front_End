import React, { useState, useEffect } from 'react'
import './StackStyle.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import { CheckDelete } from "../../components"
import { useAuthContext } from "../../hooks/useAuthContext"

const FlashStack = ({ stack }) => {
  const [deleting, setDeleting] = useState(false)
  const { user } = useAuthContext()
  const [date, setDate] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    translateTimer()
  }, [loading, stack])

  function changeDeleting() {
    setDeleting(!deleting)
  }

  function translateTimer() {
    let today = stack.stackTimer.slice(0, 10)
    setDate(today)
  }

  async function destroyStack(e) {
    const options = {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    }
    try {
      const destroy = await fetch(`http://localhost:3000/flashStacks/${stack._id}`, options)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>

      {(deleting ? <CheckDelete destroyStack={destroyStack} deleting={deleting} setDeleting={setDeleting}/>:
      <div role='stackDiv' className='stackDiv'>
        <h2 className='topic'>{stack.topic}</h2>
        <p>{stack.cardCount} cards </p>
        <p>Revise by: {date} </p>
        <section >
          <Link to={`${stack._id}`} >
            <button className="reviseButton">Revise</button>
          </Link>
        </section>

        <Link to={`${stack._id}/new`} key={stack._id}>
          <button className='addRemove' id='addCard'>Add card</button>
        </Link>
      <button onClick={changeDeleting} className='addRemove' id='removeCard'>Remove Stack</button>
      </div>
      )}
    </>
  )
}

export default FlashStack
