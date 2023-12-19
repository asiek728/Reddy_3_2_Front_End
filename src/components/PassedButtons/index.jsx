import React from 'react'
import './style.css'

const PassedButtons = ({ cardIncrement, setCardIncrement, card }) => {
    async function updatePass() {

        setCardIncrement(cardIncrement + 1)

        const options = {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                passed: true
            })
        }

        const response = await fetch(
            `http://localhost:3000/flashCards/${card['_id']}`,
            options
        );
    }

    async function updateFail() {

        setCardIncrement(cardIncrement + 1)

        const options = {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                passed: false
            })
        }

        const response = await fetch(
            `http://localhost:3000/flashCards/${card['_id']}`,
            options
        );
    }

    return (
        <>
            <button className='passButton' onClick={updatePass}>Got it</button>
            <button className='failButton' onClick={updateFail}>Not quite</button>
        </>
    )
}

export default PassedButtons
