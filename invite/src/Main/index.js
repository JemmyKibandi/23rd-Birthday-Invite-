import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Typewriter } from "react-simple-typewriter";
import CssBaseline from "@mui/material/CssBaseline";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import ColorModeSelect from "../shared-theme/ColorModeSelect";
import "@fontsource/special-elite";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
  alignSelf: "center",
  width: "100%",
  height: "100vh", // Make the card span the full viewport height
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  marginTop: "50px", // ✅ Moves the card 50px down from the top
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
    height: "auto", // Allow height to adjust on larger screens if necessary
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const ballStyle = {
  width: 100,
  height: 100,
  background: 'linear-gradient(135deg, #F7B7D3, #b667eb)', // Pastel Pink to Pastel Lilac gradient
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  position: "absolute",
  top: "-50px", // ✅ Places it above the card
};

export default function Main(props) {
  const [showBall, setShowBall] = React.useState(true);
  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false);

  // Simulate the ball disappearing after 2 seconds (you can adjust the time as needed)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowBall(false); // Trigger exit animation
    }, 2000); // Ball will disappear after 2 seconds
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsTypewriterVisible(true);
    }, 12000); // 2-second delay for Typewriter to appear

    return () => clearTimeout(delayTimer); // Cleanup the timer
  }, []);

  return (
    <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh", // Ensure it takes up the full height of the page
      background: "linear-gradient(45deg, #ff7eb9, #c2a7f0)", // Gradient from pink to lilac
      flexDirection: "column", // Stack the content vertically
      alignItems: "center", // Center content horizontally
      paddingTop: "50px", // Adjust if needed to make space from top
    }}
>
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Animated Element (Above the Card) */}
        <AnimatePresence>
          {showBall && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }} // Make it fade out and scale down
              transition={{
                type: "inertia",
                velocity: 10,
                bounceDamping: 10,
                bounceStiffness: 100,
                // delay: 0.5, // Delay before the animation starts
              }}
              style={ballStyle}
            >
              23
            </motion.div>
          )}
        </AnimatePresence>

        <Card
          variant="outlined"
          sx={{
            padding: 4,
            textAlign: "center",
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
              words={[
                "You have been Invited to Jem's Birthday ❤️",
                "I really can't wait, auuuuuu 💃🏾",
              ]}
              loop={1} // Ensures the animation runs once and stops
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <br></br>
          <CardMedia
            component="img"
            height="140"
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2D6uqAeNxGvJFbV1qZz6UlQJOOGvLjCxdQA&s"
            alt="green iguana"
            sx={{
              borderRadius: "16px", // Adjust the value for desired roundness
            }}
          />
          <CardContent>
            <h1
              style={{
                fontFamily: "'Special Elite', monospace", // Apply the fancy typewriter font
                fontSize: "2rem",
                color: "#333", // Optional: Change color for styling
              }}
            >
               <div>
      {isTypewriterVisible && (
        <Typewriter
        words={[ 
          "Location: Les Arcade Salaffa (aka my place)\n\n" +
          "Date: 8th Feb (😋🗓️)\n\n" +
          "What to carry: A spoon (for the mashed potatoes, because who even uses a fork for those?), a fork for the chicken, and your ‘I’ve got nothing better to do’ dance moves. 💃🏾💃🏾💃🏾💃🏾💃🏾🍗🥔\n\n" +
          "Dresscode: Indoor cooking vibes. So, wear your best apron, slippers, and pretend you know what you’re doing in the kitchen. 🧑‍🍳💃🏾\n\n"+
          "See Yah 🥹❤️" 

        ]}        
        
          loop={1} // Ensures the animation runs once and stops
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      )}
    </div>
            </h1>
          </CardContent>
        </Card>
      </div>
    </AppTheme>
    </div>
  );
}
