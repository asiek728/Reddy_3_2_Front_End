import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FlashStack, StackForm } from '../../components'
import { useAuthContext } from "../../hooks/useAuthContext"
import './style.css'

const FlashStacksPage = () => {

  const [stacks, setStacks] = useState([])
  const [topic, setTopic] = useState("")

  /////AUTH
  const { user } = useAuthContext()

  useEffect(() => {
    const displayStacks = async () => {
      const { data } = await axios.get("http://localhost:3000/flashStacks", {
        ///////////////////////AUTH
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
        //////////////////////////
      })
      setStacks(data)
    }
    ////AUTH
    if (user) {
      displayStacks(user)
    }
  }, [stacks, user, topic]) 

  return (
    <>
      <h1>Your flashcard stacks</h1>
      <StackForm topic={topic} setTopic={setTopic}/>
      <div className='stacksContainer'>
        {stacks.map(stack => (
            <FlashStack stack={stack} key={stack._id} />
        ))
        }
      </div>

    </>
  )
}

export default FlashStacksPage
