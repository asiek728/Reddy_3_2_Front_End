import React from 'react'
import { Login } from '../../pages'
import { useAuthContext } from '../../hooks/useAuthContext'

const Entry = () => {

  const { user } = useAuthContext();

  return (
    <>
      {
        !user && 
        <>
        <div>Welcome</div>
        <Login />
        </>
      }

      {
        user && <div>Testing - now logged in!</div>
      }
    </>

  )
}

export default Entry
