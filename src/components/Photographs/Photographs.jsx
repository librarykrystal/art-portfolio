import React, { useLayoutEffect } from "react";

import Bulletin from '../Bulletin/Bulletin';

// Photo Imports
import ParisCataQueue from './webPhotoParisCatacombes.jpg';
import ParisDoorShadow from './webPhotoParisDoorShadow.png';
import ParisLePenseur from './webPhotoParisLePenseur.png';
import ParisMannequin from './webPhotoParisMannequin.png';
import ParisMoulinRouge from './webPhotoParisMoulinRouge.png';
import ParisPalaisGarnier from './webPhotoParisPalaisGarnier.png';
import ParisStreetLamp from './webPhotoParisStreetLamp.jpg';
import ParisStreetSky from './webPhotoParisStreetSky.png';
import FairBear from './webPhotoFairBear.png';
import FairCheer from './webPhotoFairCheer.png';
import FairHaunt from './webPhotoFairHaunt.png';
import FairRide from './webPhotoFairRideSky.png';
import FairSilhouette from './webPhotoFairSilhouette.png';
// import LondonChloro from './webPhotoLondonChloro.png';
// import LondonHolmes from './webPhotoLondonHolmes.png';
import LondonLitter from './webPhotoLondonLitter.png';
import LondonNatHist from './webPhotoLondonNatHistMus.png';
import LondonTowerChamber from './webPhotoLondonTowerChamber.png';
// import LondonWhalePeek from './webPhotoLondonWhalePeek.png';
import MplsHBridgeSwarms from './webPhotoBridgeSwarms.png';
import MplsCardGuard from './webPhotoCardGuard.png';
import CatsRigbyBath from './webPhotoCatBath.png';
import MplsGoldMedalHill from './webPhotoGoldMedalHill.png';
import CatsRigby from './webPhotoRigby.png';
// import CatsRigbyRoll from './webPhotoRigbyRoll.png';
import CatsRigbySteadman from './webPhotoRigbySteadman.png';
// import MplsStoneArch from './webPhotoStoneArch.png';


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

const photos = [
  {id: 101, title: "Le Penseur", set: "Paris", printsAvailable: false, image: ParisLePenseur},
  {id: 306, title: "Rigby", set: "Cats", printsAvailable: false, image: CatsRigby},
  {id: 402, title: "Card Guard", set: "Minneapolis", printsAvailable: false, image: MplsCardGuard},
  {id: 102, title: "Moulin Rouge Exterior", set: "Paris", printsAvailable: false, image: ParisMoulinRouge},
  {id: 202, title: "I Can Carry It", set: "Fair", printsAvailable: false, image: FairBear},
  {id: 103, title: "Alley Mannequin", set: "Paris", printsAvailable: false, image: ParisMannequin},
  {id: 304, title: "Kitty Litter", set: "London", printsAvailable: false, image: LondonLitter},
  {id: 107, title: "Catacombes Queue", set: "Paris", printsAvailable: false, image: ParisCataQueue},
  {id: 501, title: "Bathtime", set: "Cats", printsAvailable: false, image: CatsRigbyBath},
  {id: 205, title: "Darkened Barker", set: "Fair", printsAvailable: false, image: FairSilhouette},
  {id: 303, title: "Natural History Architecture", set: "London", printsAvailable: false, image: LondonNatHist},
  {id: 201, title: "Midway Ride", set: "Fair", printsAvailable: false, image: FairRide},
  {id: 403, title: "Gold Medal Hill", set: "Minneapolis", printsAvailable: false, image: MplsGoldMedalHill},
  {id: 104, title: "Curves of the Palais Garnier", set: "Paris", printsAvailable: false, image: ParisPalaisGarnier},
  {id: 105, title: "Shadowy Montmartre Street", set: "Paris", printsAvailable: false, image: ParisStreetSky},
  {id: 306, title: "Living Steadman", set: "Cats", printsAvailable: false, image: CatsRigbySteadman},
  {id: 204, title: "Fair Memory", set: "Fair", printsAvailable: false, image: FairCheer},
  {id: 106, title: "A Shadow Blocks the Exit", set: "Paris", printsAvailable: false, image: ParisDoorShadow},
  {id: 108, title: "Street Lamp", set: "Paris", printsAvailable: false, image: ParisStreetLamp},
  {id: 203, title: "Haunted Funhouse", set: "Fair", printsAvailable: false, image: FairHaunt},
  {id: 305, title: "Tower Chamber", set: "London", printsAvailable: false, image: LondonTowerChamber},
  {id: 401, title: "Swarms Under the Hennepin Bridge", set: "Minneapolis", printsAvailable: false, image: MplsHBridgeSwarms},
  // {id: 306, title: "Hope Through Stained Glass", set: "London", printsAvailable: false, image: LondonWhalePeek},
  // {id: 306, title: "Curves of the Stone Arch", set: "Minneapolis", printsAvailable: false, image: MplsStoneArch},
  // {id: 306, title: "Rig Roll", set: "Cats", printsAvailable: false, image: CatsRigbyRoll},
  // {id: 301, title: "Poison Medicine", set: "London", printsAvailable: false, image: LondonChloro},
  // {id: 302, title: "Holmes", set: "London", printsAvailable: false, image: LondonHolmes},
];

function Photographs() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">

        <div className="photosetContainer">

          {photos.map(photo => {
            return (
              <img className="photograph" key={photo.id} src={photo.image}></img>
            )
          })}

        </div>

      </div>
      <center>
      <Typography variant="body1" mt={15} gutterBottom>© Krystal Frost</Typography>
      </center>
      <br/>
    </ThemeProvider>
  );
}

export default Photographs;