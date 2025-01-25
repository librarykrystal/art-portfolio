import React, { useLayoutEffect, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import FontFaceObserver from "fontfaceobserver";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import '@fontsource/special-elite/400.css';
import '@fontsource/rock-salt/400.css';
import '@fontsource/kolker-brush';

// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: 'Albert Sans',
    h3: {
      fontFamily: 'Kolker Brush',
      fontSize: '6rem',
      '@media (max-width:500px)': {
        fontSize: '5rem',
      }
  }},
  palette: {
    primary: {
      main: '#d9d9d9',
    },
    secondary: {
      main: grey[500],
      contrastText: '#fff',
    },
  },
});

function Header() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver('Kolker Brush');
    font.load().then(() => {
      setFontLoaded(true);
    })
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <ThemeProvider theme={theme}>
      <div className="headerOuter">

        <div className="headerName">
          <Typography
            variant="h3"
            mt={0}
            mb={0} 
            style={{ fontSize: !fontLoaded && '4rem'}}
            gutterBottom
          >
            Krystal Frost
          </Typography>
        </div>

        <div className="subheader">
          <Typography variant="body1" mt={-3} mb={0} sx={{fontSize: "14pt"}} gutterBottom>
            FINE ART
          </Typography>

        {/* CONDITIONAL RENDERS to show proper subheader depending on route */}
          { pathname == '/photographs' && 
            <Typography variant="body1" color="secondary" display="block" mt={-1} mb={0} sx={{fontSize: "14pt"}} gutterBottom>
              PHOTOGRAPHS
            </Typography>
          }
          { pathname == '/paintings' && 
            <Typography variant="body1" color="secondary" display="block" mt={-1} mb={0} sx={{fontSize: "14pt"}} gutterBottom>
              PAINTINGS
            </Typography>
          }
          { pathname == '/home' && 
            <Typography variant="body1" color="secondary" display="block" mt={-1} mb={0} sx={{fontSize: "14pt"}} gutterBottom>
              PAINTING & PHOTOGRAPHY
            </Typography>
          }
          
        </div>
        <br></br>

      </div>
    </ThemeProvider>
  );
}

export default Header;