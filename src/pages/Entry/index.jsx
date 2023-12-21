import React from 'react'
import { Login } from '../../pages'
import { useAuthContext } from '../../hooks/useAuthContext'

const Entry = () => {

  const { user } = useAuthContext();

  return (
    <div id='Home'>
      {
        !user && 
        <>
        <div id="welcome"> Welcome to your notes</div>
        <Login />
        </>
      }

      {
        user && <div>Testing - now logged in!</div>
      }
    </div>

  )
}

export default Entry
