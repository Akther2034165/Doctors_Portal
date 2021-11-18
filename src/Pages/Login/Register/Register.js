import {
  Alert,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, authError, registerUser, isloading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didnot match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isloading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your name"
                name="name"
                onBlur={handleOnBlur}
                type="text"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your email"
                name="email"
                onBlur={handleOnBlur}
                type="email"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your password"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Re-type your password"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ width: "75%", m: 1, background: "#19C1D2FF" }}
              >
                Register
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isloading && <LinearProgress />}
          {user?.email && (
            <Alert severity="success">User created successfully!!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
