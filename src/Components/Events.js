import React from "react";

const Events = () => {
  const containerStyle = {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    padding: "20px",
    fontSize: "24px",
    width: "80%", // Adjust the width as per your preference
    left: "50%",
    transform: "translateX(10%)",
    borderRadius: "25px",
  };

  const aboutBoxStyle = {
    backgroundColor: "#fff9c4",
    borderRadius: "10px",
    padding: "5%",
    width: "70%",
    height: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    overflowY: "hidden",
    margin: "auto",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Responsive grid, minimum 300px width, maximum 1fr (equal width)
    gridAutoRows: "minmax(200px, auto)", // Minimum row height with auto growing
    gap: "16px",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    padding: "0 50px", // Added padding for larger screens
  };

  const cardStyle = {
    backgroundColor: "#FFD180",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
    position: "relative",
    margin: "16px",
  };

  const knowMoreButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    borderRadius: "10px",
    padding: "8px",
    cursor: "pointer",
    border: "2px solid #000",
  };

  const imageSize = {
    width: "100%",
    height: "auto",
    borderRadius: "20%",
    border: "2px solid #000",
  };

  const titleStyle = {
    fontSize: "20px",
  };

  const descriptionStyle = {
    fontSize: "12px",
  };

  const dataset = [
    {
      id: 1,
      title: "Introduction to Game Development",
      description:
        "The workshop aims to provide participants with hands-on experience in using various tools and techniques related to game development. The tools covered in the workshop will include Pygame, Piskell, and SFXR. The workshop is designed to introduce participants to the basics of game development, allowing them to create simple games, design sprites, and generate 8-bit audio.",
      imageSrc: "https://placekitten.com/300/300?image=1",
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-symbiosis-institute-of-technology-pune-presents-introduction-to-game-development/",
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description for Event 2",
      imageSrc: "https://placekitten.com/300/300?image=2",
      link: "https://example.com/event2",
    },
    // Add more events as needed
  ];

  const mediaQuerySmall = "@media (max-width: 768px)";
  const mediaQueryMedium = "@media (min-width: 769px) and (max-width: 1200px)";

  const responsiveCardStyleSmall = {
    width: "calc(60% - 16px)", // Adjusted width for smaller screens
  };

  const responsiveCardStyleMedium = {
    width: "calc(33.33% - 32px)", // Adjusted width for medium screens, considering gap
  };
  return (
    <div style={{ backgroundColor: "#4285F4" }}>
      <header style={headerStyle}>
        <h1>Events</h1>
        <p style={{ fontSize: "16px" }}>
          Google Developers program for university students to learn skills in
          the domains of mobile development, web development, machine learning,
          and cloud (primarily). We also help encourage different other domains
          like competitive programming, ethical hacking, AR/VR, etc.
        </p>
      </header>
      <section style={containerStyle}>
        <div style={gridContainerStyle}>
          {dataset.map((event) => (
            <div
              key={event.id}
              style={{
                ...cardStyle,
                ...responsiveCardStyleSmall,
                [mediaQueryMedium]: responsiveCardStyleMedium,
              }}
            >
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <div style={knowMoreButtonStyle}>Know More</div>
                <div>
                  <img
                    src={event.imageSrc}
                    alt={`Image for ${event.title}`}
                    style={imageSize}
                  />
                </div>
              </a>
              <div>
                <b style={titleStyle}>{event.title}</b>
              </div>
              <div style={descriptionStyle}>{event.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
