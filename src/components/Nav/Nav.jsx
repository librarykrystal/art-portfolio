import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';

import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PortraitIcon from '@mui/icons-material/Portrait';
import BrushIcon from '@mui/icons-material/Brush';


// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: [
      'Albert Sans',
    ],
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
      contrastText: "#fff",
    },
  },
});

function Nav() {

  const history = useHistory();

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const goHome = (event) => {
    event.preventDefault();
    history.push("/home");
  }

  const goAbout = (event) => {
    event.preventDefault();
    history.push("/about");
  }

  return (
    <ThemeProvider theme={theme}>

      <div className="navFSSD">
        <Typography variant="body1" mt={0.1} mb={0} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>Full-Stack</Typography>
        <Typography variant="body1" mt={0} mb={-0.4} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid black", borderRight: "5px solid black"}} gutterBottom>Software</Typography>
        <Typography variant="body1" mt={0} mb={0} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid black", borderRight: "5px solid black"}} gutterBottom>Developer</Typography>
      </div>

      <div className="navBarUpper"></div>

      <div className="navBarContent">

        <div className="navLinksLeft">
          {/* HOME */}
          <IconButton aria-label="home"
            className="navIconBtn"
            color="secondary"
            onClick={goHome}
          >
            <HomeIcon sx={{ fontSize: 26 }} />
          </IconButton>
          {/* ABOUT */}
          <IconButton aria-label="about"
            className="navIconBtn"
            color="secondary"
            onClick={goAbout}
          >
            <InfoIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </div>
        
        <div className="navLinksRight">
          {/* LINKEDIN */}
          <IconButton aria-label="linkedIn"
            className="navIconBtn"
            color="primary"
            href="https://www.linkedin.com/in/krystal-frost"
          >
            <LinkedInIcon sx={{ fontSize: 26 }} />
          </IconButton>
          {/* GITHUB */}
          <IconButton aria-label="gitHub"
            className="navIconBtn"
            color="primary"
            href="https://github.com/librarykrystal"
          >
            <GitHubIcon sx={{ fontSize: 26 }} />
          </IconButton>
          {/* GALLERY OF FROST */}
          <IconButton aria-label="galleryOfFrost"
            className="navIconBtn"
            color="primary"
            href="https://www.galleryoffrost.com/"
          >
            <BrushIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Nav;