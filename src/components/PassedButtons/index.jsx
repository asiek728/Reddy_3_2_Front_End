import React from 'react'

const PassedButtons = ({cardIncrement, setCardIncrement}) => {
    async function updatePass(){
        const response = await fetch(`https://localHost:3000/flashCards/${CardId}`, {
        method: "POST",
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
        <button>Not quite</button>
    </>
  )
}

export default PassedButtons
