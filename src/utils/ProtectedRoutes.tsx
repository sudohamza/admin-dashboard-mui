import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UIContext } from "../context/ui";

const ProtectedRoutes = () => {
  const { dispatch, state } = useContext(UIContext);

  return state.isLoggedIn ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoutes;
