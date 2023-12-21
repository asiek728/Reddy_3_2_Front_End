import React from 'react'
import { Login } from '../../pages'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link } from "react-router-dom";
import './style.css'

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
        user &&
        <div>
          <div id='intro'>
            <h1>Welcome to your flashcards page!</h1>
            <h2 id='introH2'>On this app you can:</h2>
          </div>

          <div className='container' >
              <Link id='' to={'/flashStacks'} >
                <div className='homePageDiv'>
                  <p>Create your own stacks of flashcards</p>
                </div>
              </Link>
              <Link to={'/flashStacks/:id/new'}>
                <div className='homePageDiv'>
                  <p>Add flashcards to the chosen stack</p>
                </div>
              </Link>
              <Link to={'/flashStacks'}>
                <div className='homePageDiv'>
                  <p>The recommended review date will be calculated by your score</p>
                </div>
              </Link>
              <Link to={'/thread'}>
                <div className='homePageDiv'>
                  <p>Check out our community forum if you have any questions</p>
                </div>
              </Link>
          </div>
        </div>
      }
    </div>

  )
}

export default Entry
