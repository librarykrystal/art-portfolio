import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';

// imports of latest work
import noir from './webNoir.png';

// imports of completed recent works
import hush from './webHush.png';

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
  {id: 24, title: "The Effigy of Victor Noir", year: 2024, set: "latest", orientation: "canvasLandscape", origAvailable: false, printAvailable: false, image: noir},
  {id: 23, title: "Hush", year: 2023, set: "recent", orientation: "canvasLandscape", origAvailable: false, printAvailable: true, image: hush},
  {id: 22, title: "Prince", year: 2023, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: prince},
  {id: 21, title: "Amy Winehouse", year: 2022, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: winehouse},
  {id: 20, title: "Nina Simone", year: 2021, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: simone},
  {id: 19, title: "Vladimir Nabokov", year: 2021, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: nabokov},
  {id: 18, title: "Oscar Wilde", year: 2020, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: wilde},
  {id: 17, title: "Edgar Allan Poe", year: 2020, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: poe},
  {id: 15, title: "Vincent Price", year: 2019, set: "portrait", orientation: "canvasLandscape", origAvailable: false, printAvailable: true, image: price},
  {id: 14, title: "Orson Welles", year: 2017, set: "portrait", orientation: "canvasPortrait", origAvailable: false, printAvailable: true, image: welles},
  {id: 13, title: "Ella Fitzgerald", year: 2015, set: "portrait", orientation: "canvasLandscape", origAvailable: false, printAvailable: true, image: fitzgerald},
  {id: 12, title: "Rod Serling", year: 2014, set: "portrait", orientation: "canvasLandscape", origAvailable: false, printAvailable: true, image: serling},
  {id: 10, title: "Alfred Hitchcock", year: 2014, set: "portrait", orientation: "canvasLandscape", origAvailable: false, printAvailable: true, image: hitchcock},
];

function Paintings() {

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
          <Typography component={'span'} className="inProgHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 24}} gutterBottom>
            LATEST WORK
          </Typography>
        </div>

        {/* LATEST main image and caption */}
        <img className="latestImageLandscape" src={noir}></img>
        <div className="captionUnder">
          <center>
            <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
              <Box fontWeight="bold" fontStyle="italic" display='inline'>The Effigy of Victor Noir</Box>, 16x20 acrylic on canvas, 2024
            </Typography>
          </center>
        </div>

        {/* LATEST closeup images */}
        {/* <div className="latestCloseupsContainer">
          <img className="zoomImage" src={noirZoomLeaf}></img>
          <img className="zoomImage" src={noirZoomLapel}></img>
          <img className="zoomImage" src={noirZoomFace}></img>
        </div> */}

      </div>


      {/* RECENT work container */}
      <div className="containerAdditional">
        
        {/* RECENT image and caption */}
        <img className="latestImageLandscape" src={hush}></img>
        <div className="captionUnder">
          <center>
            <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
              <Box fontWeight="bold" fontStyle="italic" display='inline'>Hush</Box>, 16x20 acrylic on canvas, 2023
            </Typography>
            <div className="lineBreak"></div>
            <Typography component={'span'} variant="body1" sx={{ textAlign: "justify"}}gutterBottom>
              Featured in 2024 Surrealist gallery exhibition <Box fontStyle="italic" display='inline'>Where Ideas Come From</Box>
            </Typography>
          </center>
        </div>
      </div>


      {/* OLDER / PORTRAIT WORKS GALLERY */}
      <div className="paintingsOuterContainer">

        <div className="portraitureHeader">
          <center>
          <Typography component={'span'} color="secondary" className="inProgHeaderText" variant="h3" fontWeight="bold" mb={0} sx={{fontSize: 24}} gutterBottom>
            SELECTED PORTRAITURE
          </Typography>
          <br />
          <Typography component={'span'} color="secondary" className="inProgHeaderText" variant="h3" fontWeight="bold" mb={0} sx={{fontSize: 24}} gutterBottom>
            2014-2023
          </Typography>
          </center>
        </div>

        {/* images of older works */}
        <div className="paintingsSectionContainer">
         
         {/* map through artworks and show only those that are not of set LATEST */}
         {artworks.map(art => {
            return (
              <span key={art.id}>
                {art.set == 'portrait' &&
                <div className="canvasContainer">
                  <img className={art.orientation}  src={art.image}></img>
                  </div>
                }
              </span>
            )
          })}
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