import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>404: Page not found</h1>
      <Link to="/">Home</Link>
    </>

  )
}

export default NotFound
