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
          <Typography variant="body1" mt={0} mb={0} sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
            I’m a creative type and a puzzle-solver, full-stack trained with an affinity for front-end design.  When I’m not working in code, I can be found painting, writing, sipping coffee with pals, or wandering my favorite museums.
          </Typography>
        </div>
      </div>

      <Generator />

      <center>
      <Typography variant="body1" mt={15} gutterBottom>© Krystal Frost</Typography>
      </center>
      <br/>

    </ThemeProvider>
  );
}

export default About;