import React from 'react'
import { useState } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext"

const AddThread = () => {

  const { user } = useAuthContext()

	const [formData, setFormData] = useState({
    Question: "",
    Subject: "",
  });

	const subjectOptions = [
    { value: 'maths', label: 'Maths' },
    { value: 'english', label: 'English' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
		{ value: 'arts', label: 'Arts' },
		{ value: 'french', label: 'French' },
		{ value: 'german', label: 'German' },
		{ value: 'spanish', label: 'Spanish' },
		{ value: 'economics', label: 'Economics' },
		{ value: 'sociology', label: 'Sociology' },
		{ value: 'politics', label: 'Politics' },
		{ value: 'other', label: 'Other' },
  ];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/threads', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
         'Content-type': 'application/json; charset=UTF-8',
         'Authorization': `Bearer ${user.token}`

        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the Question');
      }
    } catch (error) {
      console.error('Error submitting the Question:', error);
    }
		window.location.reload()
  };

	return (
		<>

			<form onSubmit={handleSubmit}>
			<input
  type="text"
  name="Question"
  value={formData.Question}
  placeholder="Ask a Question"
  onChange={handleChange}
/>
    
      <label>
        Select a Subject:
        <select name="Subject" value={formData.Subject} onChange={handleChange}>
  				{subjectOptions.map((option) => (
    					<option key={option.value} value={option.value}>
      					{option.label}
    					</option>
					))}
				</select>
      </label>
      <button type="submit">Add Thread</button>
    </form>
		</>
	)
}

export default AddThread
