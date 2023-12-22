import React from 'react'
import { Login, Signup } from '../../components'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Login />

      <Link  to="/signup"><button id="signupLink">No account?</button></Link>
    </>
  )
}

export default LoginPage
