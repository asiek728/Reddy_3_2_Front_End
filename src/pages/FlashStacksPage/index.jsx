import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FlashStack, StackForm } from '../../components'
import { useAuthContext } from "../../hooks/useAuthContext"


const FlashStacksPage = () => {

  const [stacks, setStacks] = useState([])
  const [topic, setTopic] = useState("")

  /////AUTH
  const { user } = useAuthContext()

  useEffect(() => {
    // console.log(new.date())
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
  }, [stacks, user, topic])  ///Need to add user here as dependancy I think (was topic)


  return (
    <>
      <h1>Your flashcard stacks</h1>
      <StackForm topic={topic} setTopic={setTopic}/>
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
