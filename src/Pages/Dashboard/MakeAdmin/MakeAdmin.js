import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "./../../../hooks/useAuth";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://limitless-sands-94907.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>make an admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-search"
          label="Your Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
          sx={{ width: 250 }}
        />
        <br /> <br />
        <Button type="submit" variant="contained" sx={{ width: 250 }}>
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">
          Congratulations!! Making Admin Successfully!!
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
