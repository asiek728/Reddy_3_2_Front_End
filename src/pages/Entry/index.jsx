import React from 'react'
import { Login } from '../../pages'
import { useAuthContext } from '../../hooks/useAuthContext'
import './style.css'

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
        user &&
        <div>
          <h1>Welcome to your flashcards page!</h1>
          <h2>On this page you can:</h2>

          <div className='container'>

            <div className='homePageDiv'>
              <p>Create your own stacks of flashcards</p>
            </div>

            <div className='homePageDiv'>
              <p>Add flashcards to the chosen stack</p>
            </div>

            <div className='homePageDiv'>
              <p>Check your knowledge!
              The recommended review date will be calculated by your score.</p>
            </div>

            <div className='homePageDiv'>
              <p>Check out our forum if you have any questions</p>
            </div>

          </div>
        </div>
      }
    </>

  )
}

export default Entry
