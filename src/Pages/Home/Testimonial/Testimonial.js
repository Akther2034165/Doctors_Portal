import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import man1 from "../../../images/people-1.png";
import man2 from "../../../images/people-2.png";
import man3 from "../../../images/people-3.png";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
const Testimonial = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "left", fontWeight: 500, color: "#00BCD4", my: 3 }}
      >
        TESTIMONIAL
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "left", fontWeight: 500, mb: 3 }}
      >
        What's Our Patients <br /> Says
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: "300" }}
              >
                It is a long established fact that by the readable content of a
                lot layout.The point of using Lorem a more-or-less normal
                disturbance to using 'Content here,content
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <img src={man1} alt="" style={{ width: "80px", border: "50%" }} />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                <Typography variant="h6" sx={{ color: "#00BCD4" }}>
                  Nowshad
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Bangladesh
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: "300" }}
              >
                It is a long established fact that by the readable content of a
                lot layout.The point of using Lorem a more-or-less normal
                disturbance to using 'Content here,content
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <img src={man2} alt="" style={{ width: "80px", border: "50%" }} />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                <Typography variant="h6" sx={{ color: "#00BCD4" }}>
                  Hande Ercel
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Turkey
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: "300" }}
              >
                It is a long established fact that by the readable content of a
                lot layout.The point of using Lorem a more-or-less normal
                disturbance to using 'Content here,content
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <img src={man3} alt="" style={{ width: "80px", border: "50%" }} />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: "25px",
                }}
              >
                <Typography variant="h6" sx={{ color: "#00BCD4" }}>
                  Winson Herry
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  California
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
