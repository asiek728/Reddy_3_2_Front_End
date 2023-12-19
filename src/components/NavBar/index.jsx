import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/flashStacks">Flashcards</NavLink>
                    <NavLink to="/thread">Forum</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
}

export default NavBar
