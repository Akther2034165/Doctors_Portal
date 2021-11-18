import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://limitless-sands-94907.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <Typography
          variant="h5"
          sx={{ color: "#40cbad", fontWeight: 600, my: 3 }}
        >
          OUR DOCTORS
        </Typography>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
