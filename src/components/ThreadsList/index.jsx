import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { AddThread, FilterThread, DeleteThread } from "../index"

import { useAuthContext } from '../../hooks/useAuthContext'
import { useAuth } from '../../context/ThreadContext';


import './index.css'

const ThreadsList = ({key}) => {

	const { user } = useAuthContext()
	
	const [thread, setThread] = useState([]);
	const [filterSubject, setFilterSubject] = useState("")

	useEffect(() => {
	const fetchThreads = async () => {
            const response = await fetch('http://localhost:3000/threads', {
                headers: {
                  'Authorization': `Bearer ${user.token}`
                }
			})
            const data = await response.json()
            setThread(data)
        }
		if (user){
			fetchThreads(user)
		}
	},[user])
	console.log(thread)
	
		const displayThread = () => {
			
			if (!filterSubject){
				return thread.map((t, index) => (
					<div key={t._id} id='threadItem'>
						<Link className='topic'to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
						<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
					</div>
				));
			} else if (filterSubject === 'showAll') {
				return thread.map((t, index) => (
					<div key={t._id} id='threadItem'>
						<Link to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
						<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
					</div>
				));
			} else {
			return thread.filter(t => t.Subject === filterSubject).map((t, index) => (
				<div key={t._id} id='threadItem'>
					<p>{t.Subject}</p>
					<Link to={`/comments/${t._id}`}>{t.Question}</Link>
					<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
				</div>
			));
			}
		};
    
  return (
    <div id='threads'>
		<h1>Threads</h1>
		<div>
			<AddThread/>
			<FilterThread filterSubject={filterSubject} setFilterSubject={setFilterSubject}/>
			{displayThread()}
		</div>
    </div>
  )
}

export default ThreadsList
