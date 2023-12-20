import React from 'react'
import { Signup } from '../../components'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div>
      <Signup />
      <Link to="/">Back</Link>
    </div>
  )
}

export default SignupPage
