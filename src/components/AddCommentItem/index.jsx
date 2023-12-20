import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const AddComment = ({ id, input, setInputText, message, setMessage }) => {

    const { user } = useAuthContext()

    function handleInput(e) {
        setInputText(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()

        await fetch(`http://localhost:3000/comments`, {
            method: "POST",
            body: JSON.stringify({ comment: input, ThreadID: id, Email: user.email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setMessage('Comment added successfully');
            setTimeout(() => {
                setMessage('')
            }, 5000)
        })
        .catch((err) => {
            setMessage('There was a problem in creating your comment.');
            setTimeout(() => {
                setMessage('')
            }, 5000)
        });
        setInputText('')
        window.location.reload()
    }


  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Add comment' value={input} onChange={handleInput}/>
        <button type='submit'>Submit</button>
        <p>{message}</p>
    </form>
  )
}

export default AddComment
