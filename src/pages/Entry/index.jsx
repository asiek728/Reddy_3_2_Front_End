import React from 'react'
import { Login, Signup } from '../../pages'
import { useAuthContext } from '../../hooks/useAuthContext'

const Entry = () => {

  const { user } = useAuthContext()

  return (
    <>
    <div>Welcome</div>
    </>

  )
}

export default Entry
