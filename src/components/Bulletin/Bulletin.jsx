import React, { useLayoutEffect } from "react";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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


function Bulletin() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="bulletinBox">
        <Typography component={'span'} sx={{ textAlign: "center"}} gutterBottom>
          GALLERY EXHIBITION ANNOUNCEMENT
        </Typography>
        <Typography component={'span'} mt={1} sx={{ textIndent: "40px", textAlign: "justify"}}>
          It is my pleasure to inform that the below original work, <Box fontWeight="bold" fontStyle="italic" display='inline'>Hush</Box>, will be on display in <Box fontWeight="bold" fontStyle="italic" display='inline'>Where Ideas Come From</Box>, an exhibition celebrating the centenary of Surrealism.  The show will be hosted in Gallery 427 of the Northrup King Building in the Northeast Minneapolis Arts District, and opens Saturday, January 20.
        </Typography>
      </div>
     
      

    </ThemeProvider>
  );
}

export default Bulletin;