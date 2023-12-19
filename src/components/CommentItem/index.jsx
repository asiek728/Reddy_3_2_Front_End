import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

const CommentItem = () => {
	const [comment, setComment] = useState({})
	let { id } = useParams();

	useEffect(() => {
		const fetchComment = async (id) => {
			const response = await fetch(`http://localhost:3000/comments/${id}`)
			const data = await response.json()
			setComment(data)
	}
	fetchComment()

	},[id])

    console.log(comment)
	return (
		<div> 
			<p>{comment.comment}</p>
		</div>
	)
}

export default CommentItem
