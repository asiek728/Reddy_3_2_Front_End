import React from 'react'
import { useEffect, useState } from 'react';

const AddThread = () => {

const [text, setText] = useState("");
const [subject, setSubject] = useState("")
const [message, setMessage] = useState("");
const [thread, setThread] = useState([]);

const handleChange = (e) => {
	setText(e.target.value);
}

const handleSubject = (e) => {
    setSubject(e.target.value)
}

	const addThread = async () => {
		const response = await fetch('http://localhost:3000/threads', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({Question:text, Subject: subject}),
    })
	
		let res = await response.json();
		console.log(res, res.status)
      if (res.status === 200) {
        setMessage("Question created successfully created successfully");
      } else {
        setMessage("Some error has occured");
      }
    } 

		const handleSubmit = (e) => {
			e.preventDefault();
			addThread();
			setText("")
			window.location.reload()
		}


	return (
		<div>
			<input type="text" value={text} onChange={handleChange} placeholder="Ask a Question"/>
            <input type="text" value={subject} onChange={handleSubject} placeholder="Add subject"/>
			<button type="button" onClick={handleSubmit}>Add Thread</button>
			<p>{message}</p>
		</div>
	)
}

export default AddThread
