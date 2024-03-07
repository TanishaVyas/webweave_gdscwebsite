// Team.js
import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../Animation/Animation - 1709661583679.json";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import img1 from "../Images/Core Images/1.png";
import img2 from "../Images/Core Images/2.png";
import img3 from "../Images/Core Images/3.png";
import img4 from "../Images/Core Images/4.png";
import img5 from "../Images/Core Images/5.png";
import img6 from "../Images/Core Images/6.png";
import img7 from "../Images/Core Images/7.png";
import img8 from "../Images/Core Images/8.png";
import img9 from "../Images/Core Images/9.png";
import img10 from "../Images/Core Images/10.png";
import img11 from "../Images/Core Images/11.png";
import img12 from "../Images/Core Images/12.png";
import img13 from "../Images/Core Images/13.png";
import img14 from "../Images/Core Images/14.png";
import img15 from "../Images/Core Images/15.png";
import img16 from "../Images/Core Images/16.png";
import img17 from "../Images/Core Images/17.png";
import img18 from "../Images/Core Images/18.png";
import img19 from "../Images/Core Images/19.png";

const CircleImageHolder = ({ imageUrl, title, designation }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center horizontally
      justifyContent: "center", // Center vertically
    }}
  >
    <div
      style={{
        width: "200px",
        height: "200px", // Set a fixed square size
        overflow: "hidden",
        margin: "0 auto",
        borderRadius: "5px",
        border: "4px solid black", // Add black border
      }}
    >
      <img
        src={imageUrl}
        alt="circle-avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "4px solid black", // Add black border
        }}
      />
    </div>
    <div
      style={{
        backgroundColor: "transparent",
        padding: "10px",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: "1em",
        }}
      >
        {designation}
      </p>
    </div>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: "10px",
      }}
    >
      {/* Instagram icon */}
      <Instagram style={{ fontSize: 30, color: "black" }} />

      {/* LinkedIn icon */}
      <LinkedIn style={{ fontSize: 30, color: "black", marginLeft: "10px" }} />
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    { imageUrl: img1, title: "Megha Beria", designation: "CP" },
    { imageUrl: img2, title: "Uday Badola", designation: "Podcast" },
    { imageUrl: img3, title: "Ruhani", designation: "Design" },
    { imageUrl: img4, title: "Yajushreshtha Shukla", designation: "CP" },
    { imageUrl: img5, title: "Sumedh Dongre", designation: "Flutter" },
    { imageUrl: img6, title: "Siddharth Prabhakar", designation: "Android" },
    { imageUrl: img7, title: "Chahak Sengar", designation: "Cloud" },
    { imageUrl: img8, title: "Yash Parkhi", designation: "Game Dev" },
    { imageUrl: img9, title: "Tawishi Gupta", designation: "Design" },
    { imageUrl: img10, title: "Ria Vinod", designation: "Events" },
    { imageUrl: img11, title: "Prachi Lal", designation: "Lead" },
    { imageUrl: img12, title: "Dhwani Parekh", designation: "AI" },
    { imageUrl: img13, title: "Ananya Vashisht", designation: "Non-tech Lead" },
    { imageUrl: img14, title: "Shardul Kacheria", designation: "Podcast" },
    { imageUrl: img15, title: "Divyansh Kumar", designation: "CP" },
    { imageUrl: img16, title: "Srishti Tripathi", designation: "Podcast" },
    { imageUrl: img17, title: "Dev Bhanushali", designation: "Flutter" },
    { imageUrl: img18, title: "Gautam Ranjhas", designation: "Cloud" },
    { imageUrl: img19, title: "Smriti Sinha", designation: "AI" },
  ];

  const designationOrder = {
    Lead: 1,
    CP: 2,
    "Non-tech Lead": 3,
    Design: 4,
    Events: 5,
    Podcast: 6,
    AI: 7,
    Cloud: 8,
    Flutter: 9,
    "Game Dev": 10,
    Android: 11,
  };

  // Sort team members based on the order of designations
  const sortedTeamMembers = teamMembers.sort(
    (a, b) => designationOrder[a.designation] - designationOrder[b.designation]
  );

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        position: "relative",
        height: "auto",
      }}
    >
      <div
        id="team"
        style={{
          backgroundColor: "rgb(246, 188, 0, 0.7)",
          width: "100%",
          zIndex: 0,
          marginBottom: "20px",
        }}
      />
      <Lottie
        options={lottieOptions}
        height="100%"
        width="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "#FBBC05",
          marginBottom: "40px",
          marginTop: "-20px",
          paddingBottom: "40px",
        }}
      />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically
          minHeight: "100vh", // Set minimum height to the viewport height
        }}
      >
        <h1
          style={{
            padding: "20px",
            fontSize: "50px",
            textAlign: "center", // Center the text
            zIndex: 2,
          }}
        >
          Team
        </h1>
        <Grid container spacing={2} style={{ maxWidth: "100%" }}>
          {sortedTeamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                style={{
                  position: "relative",
                  borderColor: "black", // Add black border
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  width: "250px",
                  height: "350px", // Set a fixed square size
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                  marginBottom: "20px", // Adjust the margin for spacing between cards
                  border: "4px solid black", // Add black border
                  margin: "auto", // Center the card horizontally
                }}
              >
                <CircleImageHolder
                  imageUrl={member.imageUrl}
                  title={member.title}
                  designation={member.designation}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
