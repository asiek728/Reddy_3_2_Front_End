import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FlashStack } from '../../components'

const FlashStacksPage = () => {
  const [stacks, setStacks] = useState([])

  useEffect(() => {
    const displayStacks = async () => {
      const { data } = await axios.get("https://reddy-3-2-back-end.onrender.com/flashStacks")
      setStacks(data)
    }
    displayStacks()
  }, [])


  return (
    <>
      <h1>Your flashcard stacks</h1>

      <div className='stacksDiv'>
        {stacks.map(stack => (
          <FlashStack stack={stack} />
        ))
        }
      </div>

    </>
  )
}

export default FlashStacksPage
