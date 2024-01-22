import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';
import Projects from '../Projects/Projects';

import hush from './webHush.png';
import hushZoomCat from './webHushZoomCatScan.png';
import hushZoomSkull from './webHushZoomSkullHandScan.png';
import hushZoomTendrils from './webHushZoomTendrilsScan.png';


// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import Box from '@mui/material/Box';


// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: 'Albert Sans',
    // h3: {
    //   fontFamily: 'Andika',
    // }
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

function Paintings() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">

        {/* Consuming Bulletin Component when desired, commenting out when not */}
        {/* <Bulletin /> */}

        <div className="latestHeader">
          <Typography component={'span'} className="inProgHeaderText" variant="h3" fontWeight="bold" mb={0} sx={{fontSize: 24}} gutterBottom>
            LATEST CANVAS
          </Typography>
        </div>

        <img className="latestImageLandscape" src={hush}></img>
        <div className="caption">
          <center>
            <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
              <Box fontWeight="bold" fontStyle="italic" display='inline'>Hush</Box>, 16x20 acrylic on canvas
            </Typography>
            <div className="lineBreak"></div>
            <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
              Featured in 2024 Surrealist gallery exhibition <Box fontStyle="italic" display='inline'>Where Ideas Come From</Box>
            </Typography>
          </center>
        </div>

        <div className="latestContainer">
        
        
        {/* <div class="lineBreak"></div> */}

        <img className="zoomImage" src={hushZoomTendrils}></img>
        <img className="zoomImage" src={hushZoomSkull}></img>
        <img className="zoomImage" src={hushZoomCat}></img>

        </div>
      </div>

      {/* Consuming Projects Component */}
      <Projects />

    </ThemeProvider>
  );
}

export default Paintings;