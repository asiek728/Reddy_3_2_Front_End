import React from 'react'
import { useState } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext"

const AddThread = () => {

  const { user } = useAuthContext()

  // const [token , SetToken] = useState(user.token);

	const [formData, setFormData] = useState({
    Question: "",
    Subject: "",
    Email: "",
  });


	const subjectOptions = [
    { value: 'Maths', label: 'Maths' },
    { value: 'English', label: 'English' },
    { value: 'History', label: 'History' },
    { value: 'Geography', label: 'Geography' },
		{ value: 'Arts', label: 'Arts' },
		{ value: 'French', label: 'French' },
		{ value: 'German', label: 'German' },
		{ value: 'Spanish', label: 'Spanish' },
		{ value: 'Economics', label: 'Economics' },
		{ value: 'Sociology', label: 'Sociology' },
		{ value: 'Politics', label: 'Politics' },
		{ value: 'Other', label: 'Other' },
  ];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
      Email:user.email
		}));
	};
 

	const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/threads', {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
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

  //console.log(formData)

	return (
		<>

			<form onSubmit={handleSubmit}>
			<input
            id='threadQuestion'
            type="text"
            name="Question"
            value={formData.Question}
            placeholder="Ask a Question"
            onChange={handleChange}
          />
    
      <label id='threadFilter'>
        Select a Subject:
        <select name="Subject" value={formData.Subject} onChange={handleChange}>
  				{subjectOptions.map((option) => (
    					<option key={option.value} value={option.value}>
      					{option.label}
    					</option>
					))}
				</select>
      </label>
      <button type="submit" id='addThread'>Add Thread</button>
    </form>
		</>
	)
}

export default AddThread
