import React, { useContext } from "react";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from ".";

import './App.css';

const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
		return <Loader />
	}

	return (
		<>
		  <Header />
			<AppRouter />
		</>
	);
}

export default App;