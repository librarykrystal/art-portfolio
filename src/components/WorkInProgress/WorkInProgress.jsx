import React, { useLayoutEffect } from "react";

import hush from '../Home/webHush.png';
import hushZoomCat from '../Home/webHushZoomCat.png';
import hushZoomSkull from '../Home/webHushZoomSkullHand.png';
import hushZoomTendrils from '../Home/webHushZoomTendrils.png';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
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

function WorkInProgress() {

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
            WORK IN PROGRESS
          </Typography>
        </div>

        {/* <img className="latestImageLandscape" src={hush}></img> */}
        <div className="intro">
          <Typography variant="body1" sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
          Krystal is currently working on a "portrait" of sorts: a 16x20 canvas depicting the tomb effigy of Victor Noir in Paris' famous Père Lachaise Cemetery.  Full of detail and texture balanced with soft areas of less focus that help draw the eye to the subject monument, this work is already striking. Krystal was drawn to this subject due to her own travels as well as her heaping affinity for both verdigris and juicy stories.  This painting is from the perspective of one looking down at Victor's face, with subtle but ominous shadows hinting at his murderer left standing.
          </Typography>
        </div>

        <div className="latestContainer">
        {/* <div class="lineBreak"></div> */}

        <img className="zoomImage" src={hushZoomTendrils}></img>
        <img className="zoomImage" src={hushZoomSkull}></img>
        <img className="zoomImage" src={hushZoomCat}></img>

        </div>
      </div>

    </ThemeProvider>
  );
}

export default WorkInProgress;