import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const Features = () => {
  return (
    <Container sx={{ flexGrow: 1, marginTop: -8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ background: "#00BCD4", color: "white", my: 2 }}
          >
            <AccessTimeOutlinedIcon
              sx={{ fontSize: 60 }}
            ></AccessTimeOutlinedIcon>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Opening hours</Typography>
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ background: "gray", color: "white", my: 2 }}
          >
            <EditLocationIcon sx={{ fontSize: 60 }}></EditLocationIcon>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Visit our location</Typography>
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ background: "#00BCD4", color: "white", my: 2 }}
          >
            <CallOutlinedIcon sx={{ fontSize: 60 }}></CallOutlinedIcon>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Opening hours</Typography>
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
