import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import App from './App';

firebase.initializeApp({
  apiKey: "AIzaSyCeSQgDAWuDA-UxLb5I210CqE4oekhJM7g",
  authDomain: "live-chat-app-72d90.firebaseapp.com",
  projectId: "live-chat-app-72d90",
  storageBucket: "live-chat-app-72d90.appspot.com",
  messagingSenderId: "433718300113",
  appId: "1:433718300113:web:3253408d16ed245d2424f0",
  measurementId: "G-2WTPEPJG3S"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);