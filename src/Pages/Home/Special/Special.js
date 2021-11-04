import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import treatment from "../../../images/treatment.png";
const Special = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ marginTop: 10 }}>
        <Grid item xs={12} md={4}>
          <img
            src={treatment}
            style={{ width: "300px", marginTop: "10px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">
            Exceptional Dental Care, <br /> on you Terms
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: 19,
              marginTop: 5,
              marginBottom: 5,
              fontWeight: 300,
            }}
          >
            It is a long established fact that a reader will be distract by the
            <br />
            readable content of a page when looking at its layout. The point of
            using <br /> Lorem ipsumis that is a more or less normal
            distribution of letters,as opposes <br /> to using Content here,
            content here,making it look like readable English. <br />
            Manu desktop
            <br />
            publishing packages and web pages
          </Typography>
          <Button variant="contained" style={{ backgroundColor: "#00BCD4" }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Special;
