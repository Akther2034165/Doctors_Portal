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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isloading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
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

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "75%", m: 1, background: "#19C1D2FF" }}
            >
              Login
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text">New user? please register</Button>
            </NavLink>
            {isloading && <LinearProgress />}
            {user?.email && (
              <Alert severity="success">User logged in successfully!!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------</p>
          <Button variant="contained" onClick={handleGoogleSignIn}>
            <GoogleIcon /> Google sign in
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
