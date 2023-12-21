import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
import "./style.css";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <main>
      <header>
        <nav>
          <img
            className="logoImg"
            src="../../../src/assets/favicon.png"
            alt="pic"
          />
          <section role="navbar" className="links">
            <NavLink to="/" className="navLinks">
              Home
            </NavLink>
            <NavLink to="/flashStacks" className="navLinks">
              Flashcards
            </NavLink>
            <NavLink to="/thread" className="navLinks">
              Forum
            </NavLink>
          </section>
          {user && (
            <div className="userDisplay">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="userDisplay">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default NavBar;
