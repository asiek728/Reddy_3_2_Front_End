import React from 'react'
import { useEffect, useState } from 'react';
import CommentList from '../CommentList';
import { Link } from "react-router-dom";


const ThreadsList = ({key}) => {
	const [thread, setThread] = useState([]);
    console.log(key)
	useEffect(() => {
	const fetchThreads = async () => {
            const response = await fetch('http://localhost:3000/thread')
            const data = await response.json()
            setThread(data)
        }
        fetchThreads()
	},[])

	
		const displayThread = () => {
			return thread.map((t, index) => (
				<div key={t._id}>
					<Link to={`/comments/${t._id}`}>{t.Question}</Link>
				</div>
			));
		};

        console.log(thread)
  return (
    <>
		<div>
		<h1>Threads</h1>
			{displayThread()}
		</div>
    </>
  )
}

export default ThreadsList
