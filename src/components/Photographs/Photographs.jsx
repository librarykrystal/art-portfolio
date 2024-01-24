import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';

// Photo Imports
import ParisDoorShadow from './webPhotoParisDoorShadow.png';
import ParisLePenseur from './webPhotoParisLePenseur.png';
import ParisMannequin from './webPhotoParisMannequin.png';
import ParisMoulinRouge from './webPhotoParisMoulinRouge.png';
import ParisPalaisGarnier from './webPhotoParisPalaisGarnier.png';
import ParisStreetSky from './webPhotoParisStreetSky.png';

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

function Photographs() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {/* <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
          Photography gallery coming soon
        </Typography> */}
        <div className="photosetContainer">
        <img className="photograph" src={ParisLePenseur}></img>
        <img className="photograph" src={ParisMoulinRouge}></img>
        <img className="photograph" src={ParisMannequin}></img>
        <img className="photograph" src={ParisPalaisGarnier}></img>
        <img className="photograph" src={ParisStreetSky}></img>
        <img className="photograph" src={ParisDoorShadow}></img>
        </div>


      </div>
    </ThemeProvider>
  );
}

export default Photographs;