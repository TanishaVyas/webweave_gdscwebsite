import React from "react";
import event1 from "../Images/eventpic/game dev img.jpg";
import event2 from "../Images/eventpic/flutterWorkshop.jpg";
import event3 from "../Images/eventpic/gamedev2.png";
import event4 from "../Images/eventpic/event4.png";

const Events = () => {
  const containerStyle = {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    color: "#000",
    textAlign: "center",
    justifyContent: "center",
    padding: "20px",
    fontSize: "24px",
    width: "80%",
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
        "The dynamic workshop, was unfolded with the goal of immersing participants in the exhilarating realm of game creation. This session aimed to equip attendees with hands-on experience using prominent game development tools like Pygame, Piskell, and SFXR.",
      imageSrc: event1,
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-symbiosis-institute-of-technology-pune-presents-introduction-to-game-development/",
      date: "19th August, 2023", // Add the event date
      organizer: "Yash Parkhi",
    },
    {
      id: 2,
      title: "Flutter Workshop",
      description:
        "TThe Flutter Workshop event proved to be a resounding success, offering participants an enriching experience delving into the realm of Flutter – a widely-used open-source UI software development toolkit developed by Google.",
      imageSrc: event2,
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-symbiosis-institute-of-technology-pune-presents-introduction-to-gdsc-sit-chapter-and-flutter-workshop/",
      date: "11th August, 2023", // Add the event date
      organizer: "Sumedh Dhongre and Dev Bhanushali",
    },

    {
      id: 3,
      title: "Intro to Game Dev",
      description:
        "GDSC Game Dev orchestrated an impactful workshop titled 'Customizing the Dino Game with Pygame, Sfxr, and Piskel.' This event aimed to immerse participants in the world of game development using Python, exploring the intricacies of Pygame, Sfxr for sound effects, and Piskel for asset customization.",
      imageSrc: event3,
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-symbiosis-institute-of-technology-pune-presents-game-dev-session/",
      date: "9th September, 2023",
      organizer: "Yash Parkhi",
    },
    {
      id: 4,
      title: "Intro to Open-Source",
      description:
        "The Open-Source Workshop, a collaborative effort by the Symbiosis Open-Source Society and Google Developer Student Clubs (GDSC), aimed to champion open-source software development and equip participants with essential knowledge and skills in this field. ",
      imageSrc: event4,
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-symbiosis-institute-of-technology-pune-presents-game-dev-session/",
      date: "6th October, 2023",
      organizer: "Yajushreshtha Shukla and Ishaan Siddiqui",
    },
  ];

  const mediaQuerySmall = "@media (max-width: 768px)";
  const mediaQueryMedium = "@media (min-width: 769px) and (max-width: 1200px)";

  const responsiveCardStyleSmall = {
    width: "calc(60% - 16px)",
  };

  const responsiveCardStyleMedium = {
    width: "calc(33.33% - 32px)",
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
                <br />
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
              <div style={{ fontSize: "12px", marginTop: "8px" }}>
                <strong>Date:</strong> {event.date}
              </div>
              <div style={{ fontSize: "12px", marginTop: "4px" }}>
                <strong>Organized by:</strong> {event.organizer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
