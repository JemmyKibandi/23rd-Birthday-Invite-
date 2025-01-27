import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { Typewriter } from "react-simple-typewriter";
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import Content from '../Main/Content';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import "@fontsource/special-elite"; 

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
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
      </SignUpContainer>
    </AppTheme>
  );
}
