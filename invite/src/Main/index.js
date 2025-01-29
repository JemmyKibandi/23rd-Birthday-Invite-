import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { Typewriter } from "react-simple-typewriter";
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import "@fontsource/special-elite";
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center content vertically
  alignItems: 'center', // Center content horizontally
  alignSelf: 'center',
  width: '100%',
  height: '100vh', // Make the card span the full viewport height
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
    height: 'auto', // Allow height to adjust on larger screens if necessary
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));


const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 50dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

const ballStyle = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  position: "relative",
};

export default function Main(props) {
  const [showBall, setShowBall] = React.useState(true);

  // Simulate the ball disappearing after 2 seconds (you can adjust the time as needed)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowBall(false); // Trigger exit animation
    }, 2000); // Ball will disappear after 2 seconds
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />

      <SignUpContainer direction="column" justifyContent="center" alignItems="center">
        {/* Wrap the animated ball with AnimatePresence */}
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
        
        <Card
  variant="outlined"
  sx={{
    padding: 4,
    textAlign: 'center',
    borderRadius: 3,
    position: 'relative', // Ensures proper placement of the border
    borderTop: '10px solid #FF5733', // Adds a colored border to the top
  }}
>
  <h1
    style={{
      fontFamily: "'Special Elite', monospace", // Apply the fancy typewriter font
      fontSize: "2rem",
      color: "#333", // Optional: Change color for styling
    }}
  > Hello there ❤️<br></br>
  <Typewriter
  words={[ // Part 1: Introduction
    "🎉 YOU'VE BEEN INVITED! 🎉",
    "Hey, it's Jem's BIG DAY, and I’m turning 23! 🥳 Get ready for a wild celebration, full of surprises, laughter, and memories that will last a lifetime!",
    "I really can't wait to celebrate with YOU, auuuuuu 💃🏾",
    
    // Part 2: Event Details
    "Date: [Insert Date]",
    "Time: [Insert Time]",
    "Location: [Insert Location]",
    "",  // Line break
    
    // Part 3: Fun Call to Action
    "Come for the cake, stay for the fun! 🎂🎈",
    "Mark your calendars, and let’s make this a day to remember!"
  ]}
  loop={1} // Ensures the animation runs once and stops
  cursor
  cursorStyle="|"
  typeSpeed={200} // Slower typing speed (default is 100)
  deleteSpeed={100} // Slower deletion speed
  delaySpeed={6000} // Longer pause between words (3 seconds)
  autoStartDelay={6000} // Add a 3-second delay before the animation starts
/>

  </h1>
</Card>


      </SignUpContainer>

    </AppTheme>

  );
}
