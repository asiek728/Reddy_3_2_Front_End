import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useAuthContext } from "../../hooks/useAuthContext"

// StudentID, topic, cardCount, stackTimer 

const StackForm = ({ topic, setTopic }) => {

    const [text, setText] = useState("")
    const [loadingPOST, setLoadingPOST] = useState(true);
    const [message, setMessage] = useState("")

    /////AUTH
    const { user } = useAuthContext()

    function handleChange(e) {
        setText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setTopic(text)
        console.log(topic)
        setLoadingPOST(false)

        loadingPOST ? <p style={{ marginTop: "200px", fontSize: "60px" }}>Loading...</p>
            : await createNewStack()
    }

    async function createNewStack(e) {
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(
                {
                    "StudentID": user.email,
                    "topic": topic,
                    "cardCount": 0,
                    "stackTimer": "1995-10-11T23:00:00.000Z"
                })

        }
        const response = await fetch(
            `http://localhost:3000/flashStacks`,
            options
        );
        setText("")
        setMessage("Added: " + topic)
        setTimeout(() => {
            setMessage("")
        }, 4000)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="topic">Topic: </label>
            <input value={text} type="text" onChange={handleChange} placeholder={topic}/>
            <button type="submit" className="addStackButton">Add</button>
            <p>{message}</p>
        </form>

    )
}

export default StackForm
