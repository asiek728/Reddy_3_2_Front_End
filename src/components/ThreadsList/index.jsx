import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AddThread, FilterThread } from "../index"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useAuth } from '../../context/ThreadContext';

import './index.css'

const ThreadsList = ({key}) => {
	const { thread, setThread } = useAuth()
	// const [thread, setThread] = useState([]);
	const [filterSubject, setFilterSubject] = useState("")

	const { user } = useAuthContext()

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

	
		const displayThread = () => {
			
			if (!filterSubject){
				return thread.map((t, index) => (
					<div key={t._id}>
						<Link to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
					</div>
				));
			} else if (filterSubject === 'showAll') {
				return thread.map((t, index) => (
					<div key={t._id}>
						<Link to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
					</div>
				));
			} else {
			return thread.filter(t => t.Subject === filterSubject).map((t, index) => (
				<div key={t._id}>
					<p>{t.Subject}</p>
					<Link to={`/comments/${t._id}`}>{t.Question}</Link>
				</div>
			));
			}
		};
    
  return (
    <>
		<h1>Threads</h1>
		<AddThread/>
		<FilterThread filterSubject={filterSubject} setFilterSubject={setFilterSubject}/>
			{displayThread()}
    </>
  )
}

export default ThreadsList
