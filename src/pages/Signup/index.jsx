import React from 'react'
import { Signup } from '../../components'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div id ="signup">
      <Signup />
      <Link to="/"><button id='signupBack'>Back</button></Link>
    </div>
  )
}

export default SignupPage
