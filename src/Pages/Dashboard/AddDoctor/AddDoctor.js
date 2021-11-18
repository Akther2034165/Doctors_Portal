import { Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://limitless-sands-94907.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctors added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Typography variant="h4">ADD A DOCTOR</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <br />
        <TextField
          sx={{ width: "50%", m: 3 }}
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          ADD DOCTOR
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
