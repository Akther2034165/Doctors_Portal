import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74,0.9)",
  backgroundBlendMode: "darken",
  marginTop: 150,
};
const AppointmentBanner = () => {
  return (
    <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 3 }}
              style={{ color: "#00BCD4" }}
            >
              APPOINTMENT
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </Typography>
            <br />
            <Button variant="contained" style={{ backgroundColor: "#00BCD4" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentBanner;
