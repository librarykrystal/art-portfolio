import React, { useLayoutEffect } from "react";

import Projects from '../Projects/Projects';

import princeInProg1 from './princeInProg1.png';
import princeInProg2 from './princeInProg2.png';
import princeInProg3 from './princeInProg3.png';
import princeInProg4 from './princeInProg4.png';
import princeInProg5 from './princeInProg5.png';

import hush from './webHush.png';
import hushZoomCat from './webHushZoomCat.png';
import hushZoomSkull from './webHushZoomSkullHand.png';
import hushZoomTendrils from './webHushZoomTendrils.png';


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

function Home() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">

        <div className="inProgHeader">
          <Typography component={'span'} className="inProgHeaderText" variant="h4" fontWeight="bold" mb={0} sx={{fontSize: 18}} gutterBottom>
            LATEST WORK
          </Typography>
        </div>

        <img className="latestImageLandscape" src={hush}></img>
        <div className="intro">
          <Typography component={'span'} variant="body1" mt={-2} mb={3} sx={{ textAlign: "justify"}}gutterBottom>
          <Box fontWeight="bold" fontStyle="italic" display='inline'>Hush, </Box>16x20 acrylic on canvas
          </Typography>
        </div>

        <div className="inProgContainer">
        
        
        {/* <div class="lineBreak"></div> */}

        <img className="inProgImage" src={hushZoomTendrils}></img>
        <img className="inProgImage" src={hushZoomSkull}></img>
        <img className="inProgImage" src={hushZoomCat}></img>

        </div>
      </div>

      {/* Consuming Projects Component */}
      <Projects />

    </ThemeProvider>
  );
}

export default Home;