import React from "react";
import { styled, useTheme, useMediaQuery } from "@mui/system";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Lottie from "lottie-react";
import anmetry from "../Animation/Animation - 1709816693647.json";
import About from "./About";
import back from "../Images/Untitled design (2).png";
import anime from "../Animation/Animation - 1709703315198.json";
import trydie from "../Animation/Animation-trydie.json";

const HeroContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  position: "relative", // Add this line
});

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
  color: "white", // Add this line to ensure text is visible on top of the animation
});

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: anime,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BackgroundLottie = styled(Lottie)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "#9BEAF0",
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
        {/* 
        <BackgroundLottie
          animationData={anime}
          options={lottieOptions}
          loop={true}
          autoplay={true}
        />
        */}
        <Lottie
          animationData={trydie}
          style={{
            width: isSmScreen ? "100%" : "100%",
            height: isSmScreen ? "auto" : "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          loop={true}
          autoplay={true}
        />
        {/*
        <Lottie
          animationData={anmetry}
          style={{
            width: isSmScreen ? "50vw" : "25vw", // Adjust the width based on screen size
            height: isSmScreen ? "50vw" : "25vw", // Adjust the height based on screen size
            position: "absolute",
            top: isSmScreen ? -50 : -25, // Adjust the top position based on screen size
            left: isSmScreen ? -25 : -50, // Adjust the left position based on screen size
          }}
          loop={true}
          autoplay={true}
        />
*/}
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
                  position: "relative", // Add this line
                  zIndex: 1, // Keep this line for text visibility
                  color: "#000000", // Adjust the text color to ensure visibility
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

                {/* Subtitle */}
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
