import React from 'react'
import { useState, useEffect } from "react"
import { CommentItem } from '../index'

const CommentList = () => {

    const [comment, setComment] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://localhost:3000/comments`)
            const data = await response.json()
            setComment(data)
        }
        fetchComments()
    }, [])
    console.log(comment)
   
  return (
    <div>
    <h1>All comments</h1>
    {comment.map(c => (
        <p key={c._id}>{c.comment}</p>
    ))}
    </div>
  )
}

export default CommentList
