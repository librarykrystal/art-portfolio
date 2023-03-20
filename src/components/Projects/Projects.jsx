import React, { useLayoutEffect } from "react";

import rundownHome from './theRundown_home.png';
import rundownDetails from './theRundown_details.png';
import rundownEdit from './theRundown_edit.png';
import movieSetList from './myMovieSet_list.png';
import movieSetDetails from './myMovieSet_details2.png';
import galleryAll from './gallerySnaps_all.png';
import galleryDesc1 from './gallerySnaps_desc1.png';
import galleryDesc2 from './gallerySnaps_desc2.png';


// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import '@fontsource/rock-salt/400.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: 'Albert Sans',
    h4: {
      fontFamily: 'Rock Salt',
    }
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

function Projects() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>

      {/* <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h5" sx={{fontSize: 18, width: "170px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>
          PROJECTS
        </Typography>
      </div> */}
{/* 
      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 28, width: "150px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>
          Projects
        </Typography>
      </div> */}

      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 18}} gutterBottom>
          PROJECTS
        </Typography>
      </div>

      <div className="projectsOuterContainer">
        <div className="projectsInnerContainer">

        {/* THE RUNDOWN */}
        <div className="projectsBorderContainer">
            <div className="projectHeaderBox">
              <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
                The Rundown
              </Typography>
              <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
                Artist's Paint Inventory & Wishlist App
              </Typography>
            </div>
            <div className="projectBody">
              <div className="projectImages">
                <img className="appImage" src={rundownHome}></img>
                <img className="appImage" src={rundownDetails}></img>
                <img className="appImage" src={rundownEdit}></img>
              </div>
              <div className="projectButtons">
                <Button
                variant="contained"
                color="info"
                size="small"
                startIcon={<GitHubIcon />}
                href="https://github.com/librarykrystal/artist-inventory"
                >See it on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* MY MOVIE SET */}
        <div className="projectsBorderContainer">
          <div className="projectHeaderBox">
            <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
              My Movie Set
            </Typography>
            <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
              Film Cataloguing App
            </Typography>
          </div>
          <div className="projectBody">
            <div className="projectImages">
              <img className="appImage" src={movieSetList}></img>
              <img className="appImage" src={movieSetDetails}></img>
            </div>
            <div className="projectButtons">
              <Button
              variant="contained"
              color="info"
              size="small"
              startIcon={<GitHubIcon />}
              href="https://github.com/librarykrystal/weekend-movie-sagas"
              >See it on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* MY SNAPS GALLERY */}
        <div className="projectsBorderContainer">
          <div className="projectHeaderBox">
            <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold"  gutterBottom>
              My Snaps Gallery
            </Typography>
            <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
              Gallery with Likes & Toggle Captions
            </Typography>
          </div>
          <div className="projectBody">
            <div className="projectImages">
              <img className="appImage" src={galleryDesc2}></img>
              <img className="appImage" src={galleryDesc1}></img>
            </div>
            <div className="projectButtons">
              <Button
              variant="contained"
              color="info"
              size="small"
              startIcon={<GitHubIcon />}
              href="https://github.com/librarykrystal/weekend-react-gallery"
              >See it on GitHub
              </Button>
            </div>
          </div>
        </div>
        </div>

        <center>
          <Typography variant="body1" color="white" gutterBottom>© Krystal Frost</Typography>
        </center>
        <br/>

      </div>
    </ThemeProvider>
  );
}

export default Projects;