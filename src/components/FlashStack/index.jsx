import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from "axios"

const FlashStack = ({ stack }) => {
  async function destroyStack(e){
    console.log(stack._id)
    const options = {
      method: "DELETE",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }

    }
    try{
      const destroy = await fetch(`http://localhost:3000/flashStacks/${stack._id}`,options)
      console.log("Deleted Stack: "+ stack.topic)
    }catch(error){
      console.log(error.message)
      
    }

  }

  return (
    <div role='stackDiv' className='stackDiv'>
      <h2>{stack.topic} </h2>
      <p>{stack.cardCount} cards </p>
      <Link to={`${stack._id}`} key={stack._id}>
        <button>learn</button>
        <button>Add new flashcard</button>
      </Link>
      <button onClick={destroyStack}>Remove Stack</button>
    </div>
  )
}

export default FlashStack
