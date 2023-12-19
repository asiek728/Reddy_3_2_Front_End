import React from 'react'
import './style.css'

const PassedButtons = ({cardIncrement, setCardIncrement}) => {
    async function updatePass() {

        setCardIncrement(cardIncrement + 1)
        // const response = await fetch(`https://localHost:3000/flashCards/${CardId}`, {
        // method: "PATCH",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(
        //     {
        //         "passed": true
        //     }
        //     ),
        // });
    }

    async function updateFail() {

        setCardIncrement(cardIncrement + 1)
        // const response = await fetch(`https://localHost:3000/flashCards/${CardId}`, {
        // method: "PATCH",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(
        //     {
        //         "passed": false
        //     }
        //     ),
        // });
    }

    return (
        <>
            <button className='passButton' onClick={updatePass}>Got it</button>
            <button className='failButton'  onClick={updateFail}>Not quite</button>
        </>
    )
}

export default PassedButtons
