import React from 'react'

const PassedButtons = () => {
    async function updatePass() {

        setCardIncrement(cardIncrement + 1)
        const response = await fetch(`https://localHost:3000/flashCards/${CardId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "passed": true
            }
            ),
        });
    }

    async function updateFail() {

        setCardIncrement(cardIncrement + 1)
        const response = await fetch(`https://localHost:3000/flashCards/${CardId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "passed": true
            }
            ),
        });
    }

    return (
        <>
            <button onClick={updatePass}>Got it</button>
            <button onClick={updateFail}>Not quite</button>
        </>
    )
}

export default PassedButtons
