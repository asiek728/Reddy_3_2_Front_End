import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FlashStack, StackForm } from '../../components'

const FlashStacksPage = () => {
  const [stacks, setStacks] = useState([])

  useEffect(() => {
    const displayStacks = async () => {
      const { data } = await axios.get("http://localhost:3000/flashStacks")
      setStacks(data)
    }
    displayStacks()
  }, [])


  return (
    <>
      <h1>Your flashcard stacks</h1>

      <StackForm/>
      <div className='stacksDiv'>
        {stacks.map(stack => (
            <FlashStack stack={stack} key={stack._id} />
        ))
        }
      </div>

    </>
  )
}

export default FlashStacksPage
