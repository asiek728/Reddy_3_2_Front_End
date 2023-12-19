import React from "react"

const FilterThread = ({ filterSubject, setFilterSubject }) => {
	
	const handleChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const subjectOptions = [
		{value: 'showAll', label: 'Show All'},
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

	return (
		<div>
		 <label>
        Filter By Subject:
        <select name="Subject" onChange={handleChange}>
  				{subjectOptions.map((option) => (
    					<option key={option.value} value={option.value}>
      					{option.label}
    					</option>
					))}
				</select>
      </label>
	</div>
	)
}

export default FilterThread
