import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let authToken = true;
  console.log("login : ", authToken);
  return authToken ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoutes;
