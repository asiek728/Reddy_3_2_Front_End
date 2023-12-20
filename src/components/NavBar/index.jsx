import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'

import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const NavBar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }

    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/flashStacks">Flashcards</NavLink>
                    <NavLink to="/thread">Forum</NavLink>
                    {user && (
                        <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </header>
            <Outlet />
        </main>
    )
}

export default NavBar
