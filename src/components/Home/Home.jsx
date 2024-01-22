import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';
import homeImage1 from './artSiteCoverImages.png';
import homeImage2 from './artSiteImagesCover2rows.png';

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

// The current width of the viewport
const width = window.innerWidth;
console.log('width:', width);

// The width below which the multi-row home image should be rendered
const breakpoint = 900;


function Home() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="homeContainer">
        {/* <img className="coverImage" src={homeImage}></img> */}

        {/* CONDITIONAL RENDER — shows appropriate image for screen size */}
        { width >= breakpoint ? 
          <img className="coverImage" src={homeImage1}></img>
        :
          <img className="coverImage" src={homeImage2}></img>
        }

      </div>
    </ThemeProvider>
  );
}

export default Home;