import React, { Component } from "react";
import { Box, Stack, Typography, Fade } from "@mui/material";
import chi_football from "../img/chi_football.jpg";
import wolf1 from "../img/wolf1.jpg"
import Carousel from "react-material-ui-carousel";

class header extends Component {
  constructor(props) {
    super(props);
    this.headerImages = [
      chi_football,
      wolf1
    ]
  }

  render() {
    return (
      <Box>
        <Fade in={this.props.showHeader} timeout={2000}>
          <Stack
            direction="row"
            className="container"
            id="header-container">
            <Box id="header-left" width='50%'>
              <Typography variant="h3">
                A NEW LINE OF NFTS FROM YOUR FAVORITE STREAMER
              </Typography>
              <Typography variant="h2" className="secondary" sx={{ fontWeight: 'bold' }}>CHIMASTERZEN</Typography>
            </Box>
            <Box id="header-right" width='50%'>
              <Typography variant="h4" className="secondary" sx={{ fontWeight: 'bold' }}>
                FINALLY HERE!!!
              </Typography>
              <Carousel navButtonsAlwaysVisible={true} height={400} width={400}>
                {
                  this.headerImages.map((item, i) => (
                    <Box className="header-gallery" component="img" src={item} height="400px" width="350px" />
                  ))
                }
              </Carousel>
              <Typography variant="h5" className="secondary" sx={{ fontWeight: 'bold' }}>
                You can REALLY own it!
              </Typography>
            </Box>
          </Stack>
        </Fade>
      </Box>
    );
  }
}

export default header;
