import React from 'react'

const NewFlashCardFormPage = () => {
    return (
        <div className="newUpdatePopup" id="newUpdatePopup">
            <h1>Add a New Flash Card</h1>
            <form className="popupContainer">
                <fieldset id="nameField">
                    <label htmlFor="frontFlashCard">Front:</label>
                    <input type="text" id="frontFlashCard" name="frontFlashCard" required />
                </fieldset>
                <fieldset id="statusField">
                    <label htmlFor="backFlashCard">Back:</label>
                    <input type="text" id="backFlashCard" name="backFlashCard" required />
                </fieldset>
                <input type="submit" className="btn acceptBtn" value="Accept" id="postFlashCard" />
            </form>
        </div>
    )
}

export default NewFlashCardFormPage
