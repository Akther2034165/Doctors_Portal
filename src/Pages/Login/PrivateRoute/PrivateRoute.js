import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isloading } = useAuth();
  let location = useLocation();
  if (isloading) {
    return <CircularProgress />;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
