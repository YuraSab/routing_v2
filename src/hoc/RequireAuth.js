import React from 'react';
import {useAuth} from "../hook/UseAuth";
import {Navigate, useLocation} from "react-router";

const RequireAuth = ({children}) => {

  const location = useLocation();
  const {user} = useAuth();


  if(!user){
    return <Navigate to={'/login'} state={{from: location}}/>
  }

  return children
}

export { RequireAuth }