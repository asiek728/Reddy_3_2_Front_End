import React from 'react'
import { useEffect, useState } from 'react';

const AddThread = () => {

	const [formData, setFormData] = useState({
    Question: '',
    Subject: 'maths',
  });

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
		<>
			<input type="text" value={text} onChange={handleChange} placeholder="Ask a Question"/>
            <input type="text" value={subject} onChange={handleSubject} placeholder="Add subject"/>
			<button type="button" onClick={handleSubmit}>Add Thread</button>
			<p>{message}</p>


			<form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a Question"
          value={formData.name}
          onChange={handleChange}
        />
  
        <select
					placeholder="Choose a Subject"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
        >
          <option value="Maths">Maths</option>
          <option value="option2">English</option>
          <option value="option3">History</option>
					<option value="option4">Geography</option>
					<option value="option5">Arts</option>
					<option value="option6">French</option>
					<option value="option7">German</option>
					<option value="option8">Spanish</option>
					<option value="option9">Economics</option>
					<option value="option10">Sociology</option>
					<option value="option10">Politics</option>
					<option value="option10">Other</option>
        </select>

      <button type="submit">Add Thread</button>
    </form>

		</>
		
	)
}

export default AddThread
