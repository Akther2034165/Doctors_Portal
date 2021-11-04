import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import man1 from "../../../images/people-1.png";
import man2 from "../../../images/people-2.png";

const bg = {
  backgroundColor: "#40cbad",
};
const Blog = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography
        variant="h5"
        sx={{ color: "#40cbad", fontWeight: 600, my: 3 }}
      >
        OUR BLOG
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Form Our Blog News
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={bg}>
            <Box sx={{ display: "flex", mx: 5 }}>
              <Box>
                <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
                  Rashed Kabir
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "300",
                    fontSize: 15,
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  23 April 2019
                </Typography>
              </Box>
            </Box>
            <Box>
              <br />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textAlign: "left",
                  mx: 5,
                  color: "white",
                }}
              >
                Check at least a doctor in a year for your teeth
              </Typography>
              <ArrowForwardIcon
                sx={{
                  fontSize: 55,
                  color: "white",
                  padding: 4,
                  marginRight: 70,
                }}
              ></ArrowForwardIcon>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <Box sx={{ display: "flex", mx: 5 }}>
              <Box>
                <img
                  style={{ width: "75px", marginTop: "8px" }}
                  src={man2}
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mx: 3, mt: 2 }}>
                  Dr. Hande
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "300", fontSize: 15 }}
                >
                  23 April 2019
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, textAlign: "left", mx: 3 }}
              >
                2 times of brush in a day can <br /> Keep you healthy
              </Typography>
              <br />
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                It is a long established fact that by the readable content of
                lot layout the point
              </Typography>
              <br /> <br />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <Paper elevation={3}>
              <Box sx={{ display: "flex", mx: 5 }}>
                <Box>
                  <img
                    style={{ width: "75px", marginTop: "8px" }}
                    src={man1}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ mx: 3, mt: 2 }}>
                    Dr. Jhon Mitchel
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "300", fontSize: 15 }}
                  >
                    23 April 2019
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, textAlign: "left", mx: 3 }}
                >
                  The Tooth Cancer is taking challenge
                </Typography>
                <br />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  It is a long established fact that by the readable content of
                  lot layout the point
                </Typography>
                <br /> <br />
              </Box>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
