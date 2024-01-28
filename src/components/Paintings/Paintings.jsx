import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';
import Projects from '../Projects/Projects';

// imports of latest work and zoom-in images
import hush from './webHush.png';
import hushZoomCat from './webHushZoomCatScan.png';
import hushZoomSkull from './webHushZoomSkullHandScan.png';
import hushZoomTendrils from './webHushZoomTendrilsScan.png';

// imports of older portraiture works
import fitzgerald from './webFitzgeraldE.png';
import hitchcock from './webHitchcockA.png';
import nabokov from './webNabokovV.png';
import poe from './webPoeEA.png';
import prince from './webPrince.png';
import price from './webPriceV.png';
import serling from './webSerlingR.png';
import simone from './webSimoneN.png';
import welles from './webWellesO.png';
import wilde from './webWildeO.png';
import winehouse from './webWinehouseA.png';

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

const artworks = [
  {id: 23, title: "Hush", year: 2023, set: "new", origAvailable: false, printAvailable: true, image: hush},
  {id: 22, title: "Prince", year: 2023, set: "portrait", origAvailable: false, printAvailable: true, image: prince},
  {id: 21, title: "Amy Winehouse", year: 2022, set: "portrait", origAvailable: false, printAvailable: true, image: winehouse},
  {id: 20, title: "Nina Simone", year: 2021, set: "portrait", origAvailable: false, printAvailable: true, image: simone},
  {id: 19, title: "Vladimir Nabokov", year: 2021, set: "portrait", origAvailable: false, printAvailable: true, image: nabokov},
  {id: 18, title: "Oscar Wilde", year: 2020, set: "portrait", origAvailable: false, printAvailable: true, image: wilde},
  {id: 17, title: "Edgar Allan Poe", year: 2020, set: "portrait", origAvailable: false, printAvailable: true, image: poe},
  {id: 15, title: "Vincent Price", year: 2019, set: "portrait", origAvailable: false, printAvailable: true, image: price},
  {id: 14, title: "Orson Welles", year: 2017, set: "portrait", origAvailable: false, printAvailable: true, image: welles},
  {id: 13, title: "Ella Fitzgerald", year: 2015, set: "portrait", origAvailable: false, printAvailable: true, image: fitzgerald},
  {id: 12, title: "Rod Serling", year: 2014, set: "portrait", origAvailable: false, printAvailable: true, image: serling},
  {id: 10, title: "Alfred Hitchcock", year: 2014, set: "portrait", origAvailable: false, printAvailable: true, image: hitchcock},
];

function Paintings() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  console.log(artworks);

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

        {/* LATEST main image and caption */}
        <img className="latestImageLandscape" src={hush}></img>
        <div className="captionUnder">
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

        {/* LATEST closeup images */}
        <div className="latestCloseupsContainer">
          <img className="zoomImage" src={hushZoomTendrils}></img>
          <img className="zoomImage" src={hushZoomSkull}></img>
          <img className="zoomImage" src={hushZoomCat}></img>
        </div>

      </div>
      {/* end main container */}


      {/* OLDER / COMPLETED WORKS GALLERY */}
      <div className="paintingsOuterContainer">

        {/* images of older completd works */}
        <div className="paintingsSectionContainer">
         <img className="canvasImagePortrait" src={prince}></img>
        </div>
        
        {/* copyright */}
        <center>
          <Typography component={'span'} variant="body1" color="white" gutterBottom>© Krystal Frost</Typography>
        </center>
        <br/>

      </div>

      
    </ThemeProvider>
  );
}

export default Paintings;