import React from "react";
import { Container, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import anime101 from "../Animation/try010101010.json";

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
              <p
                style={{
                  margin: "0",
                  fontSize: "1.5em",
                  maxWidth: "50vw",
                }}
              >
                <b>Symbiosis Institute of Technology, Pune</b>
              </p>
              <p style={{ fontSize: "1.2em" }}>
                At GDSC SIT, we’re passionate about empowering university
                students with cutting-edge skills in various domains. Our
                mission is to foster a vibrant community of tech enthusiasts who
                explore, innovate, and collaborate. Whether you’re a novice or
                an advanced developer, there’s a place for you here. Join us at
                DSC SIT, where curiosity meets code, and innovation knows no
                bounds!
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
