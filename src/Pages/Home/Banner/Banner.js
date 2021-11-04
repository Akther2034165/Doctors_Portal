import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import background from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const bannerBg = {
  background: `url(${background})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "400px",
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Start's here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              iusto harum inventore labore nihil cumque pariatur dolorem in,
              possimus sed.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#00BCD4" }}>
              GET APPOINTMENT
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "340px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
