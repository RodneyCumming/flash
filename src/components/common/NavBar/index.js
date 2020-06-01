import React from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { Link } from "react-router-dom";
import Login from 'components/pages/Login'

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
          <Login />
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Link to="/decks">Study</Link>
        <Link to="/add-question">Add Question</Link>
      </span>
    )}
    </div>
  );
};

export default NavBar;