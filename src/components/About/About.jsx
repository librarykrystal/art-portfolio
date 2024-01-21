import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

import Generator from '../Generator/Generator';
import selfPhoto from './self.png';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';

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

function About() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <img className="photo" src={selfPhoto}></img>
        <div className="intro">
          <Typography variant="body1" mt={0} mb={2} sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
          "My art constants, each magnetic, are people and paint.  In earlier portraits I captured facial likeness, while more recent work—bolstered by the addition of slow-drying paints and additives to my acrylic palette—ventures away from such classical sitting depiction and into more vulnerable explorations of mood, texture, inspiration, and mental health."
          </Typography>
          <Typography variant="body1" mt={0} mb={0} sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
          Krystal works out of Minneapolis and, when not painting, can be found developing for the web, sipping coffee with confidants, reading, and wandering her favorite museums.
          </Typography>
        </div>
      </div>

      {/* <Generator /> */}

      <center>
      <Typography variant="body1" mt={15} gutterBottom>© Krystal Frost</Typography>
      </center>
      <br/>

    </ThemeProvider>
  );
}

export default About;