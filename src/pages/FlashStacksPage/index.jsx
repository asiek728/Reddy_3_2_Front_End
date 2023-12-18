import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FlashStack } from '../../components'

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

    <div className='stacksDiv'>
      {stacks.map(stack => (
        <Link to={`${stack._id}`} key={stack._id}>
          <FlashStack stack={stack}  />
        </Link>
      ))
      }
    </div>

    </>
  )
}

export default FlashStacksPage
