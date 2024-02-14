import React, { useLayoutEffect } from "react";

// import vicNoirInProg1 from './webVicNoirWIP1.png';
// import vicNoirInProg2 from './webVicNoirWIP2.png';
// import vicNoirInProg3 from './webVicNoirWIP3.png';
// import vicNoirInProg4 from './webVicNoirWIP4.png';

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
          <Typography variant="body1" mb={2} sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
          Krystal is deep in the rabbit-hole of conceptualizing her next piece: a self-reflective scene themed after Lewis Carroll’s <Box fontStyle="italic" display='inline'>Alice’s Adventures in Wonderland</Box> and <Box fontStyle="italic" display='inline'>Through the Looking-Glass</Box>.  This work will see the return of Krystal’s “main character” previously seen in <Box fontStyle="italic" display='inline'>Hush</Box>—a headless female figure holding a skull, a traumatized being that the viewer may see as defeated or victorious, while at once surreal and perhaps relatable—this time, in the role of an adult Alice who has become a permanent inhabitant of Wonderland.
          </Typography>
          <Typography variant="body1" sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
          Stay tuned for behind-the-scenes updates on this work-in-progess.
          </Typography>
        </div>

        <div className="latestCloseupsContainer">
        {/* <div class="lineBreak"></div> */}

        {/* <img className="zoomImage" src={vicNoirInProg1}></img> */}
        {/* <img className="zoomImage" src={vicNoirInProg2}></img> */}
        {/* <img className="zoomImage" src={vicNoirInProg4}></img> */}

        </div>
        <center>
      <Typography variant="body1" mt={15} gutterBottom>© Krystal Frost</Typography>
      </center>
      <br/>
      </div>

    </ThemeProvider>
  );
}

export default WorkInProgress;