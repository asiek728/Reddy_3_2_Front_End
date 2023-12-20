import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { AddThread, FilterThread, DeleteThread } from "../index"
import { useAuth } from '../../context/ThreadContext';


import './index.css'

const ThreadsList = ({key}) => {

	
	const [thread, setThread] = useState([]);
	const [filterSubject, setFilterSubject] = useState("")

	
	useEffect(() => {
	const fetchThreads = async () => {
            const response = await fetch('http://localhost:3000/threads')
            const data = await response.json()
            setThread(data)
        }
        fetchThreads()
	},[])

	
		const displayThread = () => {
			
			if (!filterSubject){
				return thread.map((t, index) => (
					<div key={t._id}>
						<Link to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
						<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
					</div>
				));
			} else if (filterSubject === 'showAll') {
				return thread.map((t, index) => (
					<div key={t._id}>
						<Link to={`/comments/${t._id}`}>{t.Question}</Link>
						<p>{t.Subject}</p>
						<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
					</div>
				));
			} else {
			return thread.filter(t => t.Subject === filterSubject).map((t, index) => (
				<div key={t._id}>
					<p>{t.Subject}</p>
					<Link to={`/comments/${t._id}`}>{t.Question}</Link>
					<DeleteThread id={t._id} thread={thread} setThread={setThread}/>
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
