import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import footerBg from "../../../images/footer-bg.png";
import { Button, Container, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
const footerBackground = {
  background: `url(${footerBg})`,
  backgroundBlendMode: "darken",
  marginTop: 30,
};
const Footer = () => {
  return (
    <Container style={footerBackground} sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3} md={3} sx={{ my: 5 }}>
          <Box style={{ listStyle: "none", textAlign: "left" }}>
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box style={{ listStyle: "none", textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "#00BCD4" }}>
              Services
            </Typography>
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box style={{ listStyle: "none", textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "#00BCD4" }}>
              Oral Health
            </Typography>
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </Box>
        </Grid>
        <Grid item xs={2} md={3}>
          <Box style={{ listStyle: "none", textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "#00BCD4" }}>
              Oral Address
            </Typography>
            <li>
              New York - 101010 <br /> Hudson Yards
            </li>
            <Box style={{ display: "flex" }}>
              <li>
                <FacebookRoundedIcon
                  color="primary"
                  sx={{ fontSize: 30 }}
                ></FacebookRoundedIcon>
              </li>
              <li>
                <GoogleIcon color="primary" sx={{ fontSize: 30 }}></GoogleIcon>
              </li>
              <li>
                <TwitterIcon
                  color="primary"
                  sx={{ fontSize: 30 }}
                ></TwitterIcon>
              </li>
            </Box>
            <li>Check Up</li>
            <li>Call Now</li>
            <Button
              variant="contained"
              sx={{
                background: "#00BCD4",
                color: "white",
                my: 2,
                width: "80px",
              }}
            >
              +20255502
            </Button>
          </Box>
        </Grid>
        <Typography
          variant="h6"
          sx={{
            marginLeft: "30%",
            fontWeight: 350,
            mt: 3,
            mb: 2,
          }}
        >
          &copy; Copyright 2021,All right reserved
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
