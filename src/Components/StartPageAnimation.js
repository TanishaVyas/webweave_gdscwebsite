import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import anime from "../Animation/GdscLogoAnimation.json";
import "./StartPageAnimation.css";

const StartPageAnimation = () => {
  const [showGif, setShowGif] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    if (showGif) {
      setTimeout(() => {
        setShowText(true);
      }, 1000); // Adjust the delay based on your preferences
    }
  }, [showGif, showText]);

  const handleAnimationComplete = () => {
    setShowGif(false); // Set showGif to false after the animation completes
  };

  const handleTextAnimationComplete = () => {
    setShowText(false); // Set showText to false after the text appears
  };

  return (
    <div className="app">
      {showGif && (
        <Lottie
          animationData={anime}
          style={{ width: "50vw", height: "50vw" }}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
        />
      )}

      {showText && !showGif && (
        <div
          className={`text-container ${
            showSecondText ? "reduce-and-move" : ""
          }`}
        >
          <h1 onAnimationEnd={handleTextAnimationComplete}>
            <span
              className="static-text"
              style={{ color: "#4285F4", marginRight: "-0.2em" }}
            >
              G
            </span>
            <span className="dynamic-text" style={{ color: "#BBBBBB" }}>
              <span className="word">oogle</span>
            </span>
            <span
              className="static-text"
              style={{ color: "#34A853", marginRight: "-0.2em" }}
            >
              D
            </span>
            <span className="dynamic-text" style={{ color: "#BBBBBB" }}>
              <span className="word">eveloper</span>
            </span>
            <span
              className="static-text"
              style={{ color: "#FBBC05", marginRight: "-0.2em" }}
            >
              S
            </span>
            <span className="dynamic-text" style={{ color: "#BBBBBB" }}>
              <span className="word">tudent</span>
            </span>
            <span
              className="static-text"
              style={{ color: "#EA4335", marginRight: "-0.2em" }}
            >
              C
            </span>
            <span className="dynamic-text" style={{ color: "#BBBBBB" }}>
              <span className="word">lub</span>
            </span>
          </h1>
          <p style={{ color: "#BBBBBB", fontSize: "3vw", maxWidth: "50vw" }}>
            Symbiosis Institute of Technology, Pune
          </p>
        </div>
      )}
    </div>
  );
};

export default StartPageAnimation;
