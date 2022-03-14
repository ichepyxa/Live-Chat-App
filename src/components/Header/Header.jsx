import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../..";

import './Header.css';

const Header = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="header">
      <div className="container flex-between-center">
        <Link to="/" className="logo">Logo</Link>
        <nav className="nav">
          <Link to="/login" className="nav__item">Home</Link>
          <Link to="/chat" className="nav__item">Blog</Link>
          <Link to="/" className="nav__item">Contact</Link>
        </nav>
        <div className="buttons-auth">
          {user 
            ?
            <Link to="/" className="buttons-auth__sign-in" onClick={() => auth.signOut()}>Sign Out</Link>
            :
            <Link to="/login" className="buttons-auth__sign-in">Sign In</Link> 
          }
        </div>
      </div>
    </div>
  );
}

export default Header;