import React, {useState, useEffect}from 'react'
import axios from "axios"

// StudentID, topic, cardCount, stackTimer 

const StackForm = ({topic, setTopic}) => {

    const [text, setText] = useState("")

    function handleChange(e){
        setText(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        setTopic(text)
        console.log(topic)
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "StudentID":1,
                    "topic": topic,
                    "cardCount": 0,
                    "stackTimer": "1995-10-11T23:00:00.000Z"
                })
        
        }
        const response = await fetch(
            `http://localhost:3000/flashStacks`,
            options
        );
        }

  return (
        <form>
            <label htmlFor="topic">Topic: </label>
            <input type="text" id="topic" onChange={handleChange}placeholder="History" />
            <input type="submit" value="submit"onClick={handleSubmit}/>
        </form>

  )
}

export default StackForm
