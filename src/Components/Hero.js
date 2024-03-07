import React from "react";
import { styled, useTheme, useMediaQuery } from "@mui/system";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Lottie from "lottie-react";
import About from "./About";
import trydie from "../Animation/Animation-trydie.json";

const HeroContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  position: "relative", // Add this line
});

const Hero = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroContainer>
        <Lottie
          animationData={trydie}
          style={{
            width: isSmScreen ? "200%" : "100%",
            height: isSmScreen ? "auto" : "auto",
            position: "absolute",
            top: isSmScreen ? 400 : -25,
            left: "50%",
            transform: isSmScreen
              ? "translate(-70%, -50%)"
              : "translate(-50%, -15%)",
          }}
          loop={true}
          autoplay={true}
        />

        <Container>
          <Grid container spacing={2}>
            {/* Grid item for basic info text */}
            <Grid item xs={12}>
              <Paper
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  color: "#000000",
                  marginTop: "-100px",
                }}
                elevation={0}
              >
                {/* Heading */}
                <Typography
                  variant="h2"
                  style={{ fontSize: isSmScreen ? "2em" : "4em" }}
                >
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span>oogle</span>
                  <span style={{ color: "#34A853" }}> D</span>
                  <span>eveloper</span>
                  <span style={{ color: "#FBBC05" }}> S</span>
                  <span>tudent</span>
                  <span style={{ color: "#EA4335" }}> C</span>
                  <span>lub</span>
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    color: "#EA4335",
                    fontSize: isSmScreen ? "1.5em" : "2.5em",
                    maxWidth: "50vw",
                    margin: "auto",
                  }}
                >
                  Symbiosis Institute of Technology, Pune
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </HeroContainer>
      <About />
    </div>
  );
};

export default Hero;
