import React, { useLayoutEffect } from "react";

import fitzgerald from './webFitzgeraldE.png';
import hitchcock from './webHitchcockA.png';
import nabokov from './webNabokovV.png';
import poe from './webPoeEA.png';
import prince from './webPrince.png';
import price from './webPriceV.png';
import serling from './webSerlingR.png';
import simone from './webSimoneN.png';
import welles from './webWellesO.png';
import wilde from './webWildeO.png';
import winehouse from './webWinehouseA.png';


// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import '@fontsource/rock-salt/400.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: 'Albert Sans',
    h4: {
      fontFamily: 'Rock Salt',
    }
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
      contrastText: "#fff",
    },
    info: {
      main: '#9c454d',
      contrastText: "#fff",
    },
  },
});

function Projects() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>

      {/* <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h5" sx={{fontSize: 18, width: "170px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>
          PROJECTS
        </Typography>
      </div> */}
{/* 
      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 28, width: "150px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>
          Projects
        </Typography>
      </div> */}

      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 18}} gutterBottom>
          WORKS
        </Typography>
      </div>

      <div className="projectsOuterContainer">
        <div className="projectsInnerContainer">

          <img className="canvasImagePortrait" src={prince}></img>
          <img className="canvasImagePortrait" src={winehouse}></img>
          <img className="canvasImagePortrait" src={simone}></img>
          <img className="canvasImagePortrait" src={welles}></img>
          <div class="lineBreak"></div>
          <img className="canvasImageLandscape" src={fitzgerald}></img>
          <img className="canvasImageLandscape" src={serling}></img>
          <div class="lineBreak"></div>
          <img className="canvasImagePortrait" src={poe}></img>
          <img className="canvasImagePortrait" src={wilde}></img>
          <img className="canvasImagePortrait" src={nabokov}></img>
          <div class="lineBreak"></div>
          <img className="canvasImageLandscape" src={price}></img>
          <img className="canvasImageLandscape" src={hitchcock}></img>

        </div>

        <center>
          <Typography variant="body1" color="white" gutterBottom>© Krystal Frost</Typography>
        </center>
        <br/>

      </div>
    </ThemeProvider>
  );
}

export default Projects;