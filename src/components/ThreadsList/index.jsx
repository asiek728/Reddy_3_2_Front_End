import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { AddThread, FilterThread } from "../index"

const ThreadsList = ({key}) => {
	const [thread, setThread] = useState([]);
	const [filterSubject, setFilterSubject] = useState(false)

    console.log(key)
	useEffect(() => {
	const fetchThreads = async () => {
            const response = await fetch('http://localhost:3000/threads')
            const data = await response.json()
            setThread(data)
        }
        fetchThreads()
	},[])

	
		const displayThread = () => {
			return thread.map((t, index) => (
				<div key={t._id}>
					<Link to={`/comments/${t._id}`}>{t.Question}</Link>
					<p>{t.Subject}</p>
				</div>
			));
		};

        console.log(thread)
  return (
    <>
		<div>
		<AddThread/>
		<FilterThread filterSubject={filterSubject} setFilterSubject={setFilterSubject}/>
		<h1>Threads</h1>
			{displayThread()}
		</div>
    </>
  )
}

export default ThreadsList
