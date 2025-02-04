import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  height: "100vh",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  marginTop: "50px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
    height: "auto",
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
  const [isScreenBig, setIsScreenBig] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024
  );
  const [showBall, setShowBall] = useState(true);
  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBall(false);
    }, 2000);

    const delayTimer = setTimeout(() => {
      setIsTypewriterVisible(true);
    }, 12000);

    const handleResize = () => {
      setIsScreenBig(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(delayTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(45deg, #ff7eb9, #c2a7f0)",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!isScreenBig ? (
            <Card
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "700px", // Larger screen max width
              padding: { xs: 2, sm: 4 },
              textAlign: "center",
              borderRadius: 3,
              margin: "auto",
              boxShadow: 3,
            }}
          >
            <h1
              style={{
                fontFamily: "'Special Elite', monospace",
                fontSize: "2.5rem", // Larger text size for visibility
                color: "#333",
              }}
            >
            Your Phone is too small 😪<br></br>
            Lol, jokes, use a bigger screen <br></br>
           👩🏾‍💻👨🏾‍💻❤️
            </h1>
          </Card>
          
          ) : (
            <>
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
                  width: "100%",
                  maxWidth: "500px",
                  padding: { xs: 2, sm: 4 },
                  textAlign: "center",
                  borderRadius: 3,
                  margin: "auto",
                  boxShadow: 3,
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "2rem",
                    color: "#333",
                  }}
                >
                  <Typewriter
                    words={[
                      "You have been Invited to Jem's Birthday ❤️",
                      "I really can't wait, auuuuuu 💃🏾",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <br />
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2D6uqAeNxGvJFbV1qZz6UlQJOOGvLjCxdQA&s"
                  alt="Birthday Party"
                  sx={{ borderRadius: "16px" }}
                />
                <CardContent>
                  <h1
                    style={{
                      fontFamily: "'Special Elite', monospace",
                      fontSize: "1.5rem",
                      color: "#333",
                    }}
                  >
                    {isTypewriterVisible && (
                      <motion.div
                        initial={{ opacity: 1 }} // Ensures no fade effect
                        animate={{ x: 0 }} // Dummy animation to apply delay
                        transition={{ delay: 7 }} // 3-second delay before rendering
                      >
                        {" "}
                        <Typewriter
                          words={[
                            "Location: Les Arcade Salaffa (aka my place)\n\n" +
                              "Date: 8th Feb (😋🗓️)\n\n" +
                              "What to carry: A spoon (for the mashed potatoes, because who even uses a fork for those?), a fork for the chicken, and your ‘I’ve got nothing better to do’ dance moves. 💃🏾🍗🥔\n\n" +
                              "Dresscode: Indoor cooking vibes. So, wear your best apron, slippers, and pretend you know what you’re doing in the kitchen. 🧑‍🍳💃🏾\n\n" +
                              "See Yah 🥹❤️",
                          ]}
                          loop={1}
                          cursor
                          cursorStyle="|"
                          typeSpeed={80}
                          deleteSpeed={50}
                          delaySpeed={9000}
                        />
                      </motion.div>
                    )}
                  </h1>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </AppTheme>
    </div>
  );
}
