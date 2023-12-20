import React, { useState, useEffect } from "react"
import { useParams } from 'react-router'
import axios from 'axios'

const NewFlashCardFormPage = () => {

    const [inputFrontText, setInputFrontText] = useState('')
    const [inputBackText, setInputBackText] = useState('')
    let [cardCount, setCardCount] = useState('')
    const [message, setMessage] = useState("")
    const id = useParams()

    useEffect(() => {
        const displayCardsNo = async () => {
            const { data } = await axios.get(`http://localhost:3000/flashStacks/${id.id}`)
            setCardCount(data.cardCount + 1)
        }
        displayCardsNo()
    }, [])

    function handleInputFrontText(e) {
        setInputFrontText(e.target.value);
    }

    function handleInputBackText(e) {
        setInputBackText(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await createNewFlashCard()
        await increaseStackCardsNumber()
        setInputFrontText('')
        setInputBackText('')
    }

    async function createNewFlashCard(e) {
        const options = {
            method: "POST",
            headers: {
                ////AUTH
                // 'Authorization': `Bearer ${user.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "stackID": id.id,
                    "frontSide": inputFrontText,
                    "backSide": inputBackText
                })

        }
        const response = await fetch(
            `http://localhost:3000/flashCards`,
            options
        );

        return (
            <>Card added!</>
        )
    }

    async function increaseStackCardsNumber() {
        const options = {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cardCount": cardCount
            })
        }

        const response = await fetch(
            `http://localhost:3000/flashStacks/${id.id}`,
            options
        );
        setCardCount(cardCount = cardCount + 1)

        setMessage("Card Added")
        setTimeout(()=>{
            setMessage("")
        },4000)
    }

    return (
        <div className="newUpdatePopup" id="newUpdatePopup">
            <h1>Add a New Flash Card</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="frontFlashCard">Front:</label>
                <input value={inputFrontText} type="text" id="frontFlashCard" className="flashCardInput" onChange={handleInputFrontText} />
                <label htmlFor="backFlashCard">Back:</label>

                <input value={inputBackText} type="text" id="backFlashCard" className="flashCardInput" onChange={handleInputBackText} />
                <button type="submit" className="flashCardButton">Add</button>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default NewFlashCardFormPage
