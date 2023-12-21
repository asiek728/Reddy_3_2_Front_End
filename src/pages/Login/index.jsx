import React from 'react'
import { Login, Signup } from '../../components'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Login />

      <Link to="/signup">No account?</Link>
    </>
  )
}

export default LoginPage
