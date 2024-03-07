import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import circleGif from "../Images/cicrlegif.gif"; // Replace with your actual GIF paths

const CirclePlaceholder = ({ imageUrl, text }) => (
  <Paper
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      overflow: "hidden",
      position: "relative",
      backgroundColor: (77, 134, 249),
    }}
  >
    <img
      src={imageUrl}
      alt="circle-placeholder"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        style={{
          color: "white", // Set text color
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional text shadow
          zIndex: 1, // Ensure the text is on top
        }}
      >
        {text}
      </Typography>
    </div>
  </Paper>
);

const CirclePlaceholders = () => {
  return (
    <div style={{ backgroundColor: "#ADA7CB" }}>
      <h1>Circle Placeholders</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CirclePlaceholder imageUrl={circleGif} text="Connect" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CirclePlaceholder imageUrl={circleGif} text="Develop" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CirclePlaceholder imageUrl={circleGif} text="Hackathon" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CirclePlaceholder imageUrl={circleGif} text="Workshop" />
        </Grid>
      </Grid>
    </div>
  );
};

export default CirclePlaceholders;
