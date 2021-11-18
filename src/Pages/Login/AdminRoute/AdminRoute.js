import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isloading, admin } = useAuth();
  const location = useLocation();
  if (isloading) {
    return <CircularProgress />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
