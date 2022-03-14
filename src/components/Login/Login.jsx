import React, { useContext } from "react";
import { Context } from "../..";
import firebase from 'firebase/compat/app';

import './Login.css';

const Login = () => {
  const {auth} = useContext(Context);

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
  }
  
  const loginWithEmail = async (e, email, password) => {
    e.preventDefault();
    const {user} = await auth.signInWithEmailAndPassword(email, password).catch(async () => await auth.createUserWithEmailAndPassword(email, password));
  }

  return (
    <div className="main">
      <div className="container">
        <div className="login-wrapper">
          <form className="login">
            <h2 className="login__title">Login</h2>
            <input type="email" className="login__email" name="email" placeholder="Email" />
            <input type="password" className="login__password" name="password" placeholder="Password" />
            <input className="login__btn" type="submit" value="Sign in" onClick={(e) => {loginWithEmail(e, "maxim.sarmudov@gmail.com", "325364732")}} />
            <span className="login__devider">OR</span>
            <button className="login__btn login__btn--google" type="button" onClick={loginWithGoogle}>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;