import React, {useState} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import {CheckDelete} from "../../components"

const FlashStack = ({ stack }) => {
  const [deleting, setDeleting] = useState(false)

  function changeDeleting(){
    setDeleting(!deleting)
  }

  async function destroyStack(e) {
    const options = {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        <h2>{stack.topic} </h2>
        <p>{stack.cardCount} cards </p>
        <p>Revise by: (todo) </p>

        <Link to={`${stack._id}`} >
          <button>Test all</button>
        </Link>

        <button>Test failed (todo)</button>

        <Link to={`${stack._id}/new`} key={stack._id}>
          <button>Add card</button>
        </Link>
      <button onClick={changeDeleting}>Remove Stack</button>
        <button onClick={destroyStack}>Remove Stack</button>
      </div>
      )}
    </>
  )
}

export default FlashStack
