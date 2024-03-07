import React from "react";
import { Container, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import anime101 from "../Animation/programmer.json";

const About = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        backgroundColor: "#4285F4",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} style={{ maxWidth: "100%" }}>
          {/* First grid - basic info text */}
          <Grid item xs={12} md={6}>
            <Paper
              style={{
                height: "100%",
                backgroundColor: "transparent",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              elevation={0}
            >
              <h2
                style={{
                  margin: "0",
                  color: "black",
                  display: "inline",
                  fontSize: "2em",
                }}
              >
                Google Developer Student Club
              </h2>

              <p style={{ fontSize: "1.2em" }}>
                Google Developer Student Clubs are university based community
                groups for students interested in Google developer technologies.
                Students from all undergraduate or graduate programs with an
                interest in growing as a developer are welcome. By joining a
                GDSC, students grow their knowledge in a peer-to-peer learning
                environment and build solutions for local businesses and their
                community.
              </p>
            </Paper>
          </Grid>

          {/* Second grid - animation or image */}
          {!isSmScreen && (
            <Grid item xs={12} md={6}>
              <Paper
                style={{
                  backgroundColor: "transparent",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "100%",
                  overflowX: "hidden",
                }}
                elevation={0}
              >
                <Lottie
                  animationData={anime101}
                  style={{ width: "100%", height: "auto" }}
                  loop={true}
                  autoplay={true}
                />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
