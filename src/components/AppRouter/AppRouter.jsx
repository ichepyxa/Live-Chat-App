import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../..";

const AppRouter = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Routes>
      {user ?
        privateRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={<Component />}/>
        )
        :
        publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />}/>
        )
      }
    </Routes>
  );
}
  
export default AppRouter;