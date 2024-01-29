import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';

import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PaletteIcon from '@mui/icons-material/Palette';
import CameraIcon from '@mui/icons-material/Camera';
import PendingIcon from '@mui/icons-material/Pending';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CodeIcon from '@mui/icons-material/Code';
import InstagramIcon from '@mui/icons-material/Instagram';



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

function Nav() {

  const history = useHistory();

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const goHome = (event) => {
    event.preventDefault();
    history.push("/home");
  }

  const goPaintings = (event) => {
    event.preventDefault();
    history.push("/paintings");
  }

  const goPhotos = (event) => {
    event.preventDefault();
    history.push("/photographs");
  }

  const goAbout = (event) => {
    event.preventDefault();
    history.push("/about");
  }

  const goWip = (event) => {
    event.preventDefault();
    history.push("/wip");
  }

  return (
    <ThemeProvider theme={theme}>

      <div className="navBarContent">

        <div className="navLinksLeft">

          {/* HOME */}
          <IconButton aria-label="home"
            className="navIconBtn"
            color="primary"
            onClick={goHome}
          >
            <HomeIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* PAINTINGS */}
          <IconButton aria-label="paintings"
            className="navIconBtn"
            color="primary"
            onClick={goPaintings}
          >
            <PaletteIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* PHOTOGRAPHS */}
          <IconButton aria-label="paintings"
            className="navIconBtn"
            color="primary"
            onClick={goPhotos}
          >
            <CameraIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* ABOUT */}
          <IconButton aria-label="about"
            className="navIconBtn"
            color="primary"
            onClick={goAbout}
          >
            <InfoIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* WIP */}
          <IconButton aria-label="work in progress"
            className="navIconBtn"
            color="primary"
            onClick={goWip}
          >
            <PendingIcon sx={{ fontSize: 26 }} />
          </IconButton>

        </div>

        {/* <div className="navMid">
          <Typography component={'span'} color="primary" mb={0} sx={{fontSize: 24}}>
            /
          </Typography>
        </div> */}
        
        <div className="navLinksRight">
          {/* LINKEDIN */}
          {/* <IconButton aria-label="linkedIn"
            className="navIconBtn"
            color="primary"
            href="https://www.linkedin.com/in/krystal-frost"
          >
            <LinkedInIcon sx={{ fontSize: 26 }} />
          </IconButton> */}

          {/* INSTAGRAM */}
          <IconButton aria-label="instagram"
            className="navIconBtn"
            color="primary"
            href="https://www.instagram.com/librarykrystal/"
          >
            <InstagramIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* ETSY */}
          <IconButton aria-label="etsy shop"
            className="navIconBtn"
            color="primary"
            href="https://www.etsy.com/shop/GalleryOfFrost"
          >
            <ShoppingCartIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Nav;