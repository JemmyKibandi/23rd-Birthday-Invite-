import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

function ParallaxText() {

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card
    variant="outlined"
    sx={{
      padding: 4,
      textAlign: 'center',
      borderRadius: 3,
    }}
  >
    <h1
      style={{
        fontFamily: "'Special Elite', monospace", // Apply the fancy typewriter font
        fontSize: "2rem", 
        color: "#333", // Optional: Change color for styling
      }}
    >
      <Typewriter
        words={["You have been Invited to Jem's Birthday", "I really can't wait, auuuuuu 💃🏾"]}
        loop={1} // Ensures the animation runs once and stops
        cursor     
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  </Card>
  );
}

export default ParallaxText;
