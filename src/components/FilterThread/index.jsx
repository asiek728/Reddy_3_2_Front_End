import React from "react"

const FilterThread = ({ filterSubject, setFilterSubject }) => {
	
	const handleChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const subjectOptions = [
		{value: 'showAll', label: 'Show All'},
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
