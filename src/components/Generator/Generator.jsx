import React, { useState } from "react";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import Button from '@mui/material/Button';

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
    info: {
      main: '#9c454d',
      contrastText: "#fff",
    },
  },
});



function Generator() {

  const things = [
    "Craft Projects",
    "Tom Waits",
    "Crunchy Leaves",
    "Grey Cats",
    "Licorice Tea",
    "Cryptograms",
    "Coen Brothers Films",
    "String Lights",
    "Reading Banned Books",
    "B&W Photography",
    "Sculpture Gardens",
    "Meditating",
    "Practical Effects",
    "Journaling",
    "Deckle Edges",
    "Songs about the Moon",
    "Black Cold Brew",
    "Wrought Iron",
    "Irises",
    "Tattoos"
  ];
  
  const getRandomThing = () => {
    return things[Math.floor(Math.random() * things.length)];
  };

  const [thing, setThing] = useState(getRandomThing());

  const handleClick = () => {
    let randomThing = getRandomThing();
    if(randomThing == thing){
      randomThing = getRandomThing();
    };
    setThing(randomThing);
  };

  return (
    <ThemeProvider theme={theme}>
      <center>
    <div className="generatorBox">

      <div className="generatorHeader">
        <Typography variant="body1" mt={0} gutterBottom>RANDOM</Typography>
        <Typography variant="h5" mt={-1.5} mb={-0.9} fontWeight="bold" gutterBottom>THING I LIKE</Typography>
        <Typography variant="body1" mt={0} gutterBottom>GENERATOR</Typography>
      </div>
      <div className="generatorResult">
        <Typography variant="h5" mt={2} mb={2} fontWeight="bold" gutterBottom>{thing}</Typography>
        <Button
          variant="contained"
          color="info"
          size="small"
          onClick={handleClick}
          >Gimme another!
        </Button>
      </div>

    </div>
    </center>
    </ThemeProvider>
  );
}

export default Generator;