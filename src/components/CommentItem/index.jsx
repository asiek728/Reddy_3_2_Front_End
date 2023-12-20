import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

import { AddCommentItem, DeleteCommentItem } from '..';
import { useAuthContext } from "../../hooks/useAuthContext"


import { useAuth } from '../../context/ThreadContext';

const CommentItem = () => {
	const [comment, setComment] = useState([])

	const { user } = useAuthContext()

	const [input, setInputText] = useState('')
    const [message, setMessage] = useState('')

	
	let { id } = useParams();

	useEffect(() => {
		const fetchComment = async () => {
			const response = await fetch(`http://localhost:3000/comments/${id}`, {
                headers: {
                  'Authorization': `Bearer ${user.token}`
                }
			})
			const data = await response.json()
			setComment(data)
		}
		if (user){
			fetchComment()
		}	
	},[user])

	const displayComment = () => {
		return comment.map(c => (
			<div key={c._id}>
				<p>{c.comment}</p>
				<DeleteCommentItem id={id} setComment={setComment} comment={comment}/>
			</div>
		))
	}

	return (
		<>
		<h1>{thread.Question}</h1>
		<div> 
			{displayComment()}
		</div>
		<div>
			<AddCommentItem id={id} input={input} setInputText={setInputText} message={message} setMessage={setMessage} />
		</div>
		</>
	)
}

export default CommentItem
