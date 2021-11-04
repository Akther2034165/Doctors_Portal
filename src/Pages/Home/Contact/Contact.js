import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
const contactBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74,0.9)",
  backgroundBlendMode: "darken",
  marginTop: 100,
};
const Contact = () => {
  return (
    <Container style={contactBanner} sx={{ flexGrow: 1, height: "500px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Typography variant="h5" sx={{ color: "#00BCD4", fontWeight: 400 }}>
              CONTACT US
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", fontSize: 30, fontWeight: 400, my: 2 }}
            >
              ALWAYS CONNECTED WITH US
            </Typography>
            <TextField
              sx={{ width: "50%", m: 1, color: "white", background: "white" }}
              id="outlined-size-small"
              defaultValue="Email Address*"
              size="small"
            />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                color: "white",
                fontWeight: 200,
                background: "white",
              }}
              id="outlined-size-small"
              defaultValue="Subject*"
              size="small"
            />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                color: "white",
                background: "white",
              }}
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="Your message*"
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#00BCD4", marginTop: "5px" }}
            >
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
