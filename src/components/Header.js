import React from "react";
import { Box, Stack, Typography, Fade } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import chi_football from "../img/chi_football.jpg";
import wolf1 from "../img/wolf1.jpg"
import Carousel from "react-material-ui-carousel";
import './Header.css'

export default function Header(props) {
  const headerImages = [
    chi_football,
    wolf1
  ]
  const { height, width } = useWindowDimensions();
  const useColumnLayout = width < 960;
  const stackDirection = useColumnLayout ? "column" : "row";
  const boxWidth = useColumnLayout ? '100%' : '50%';
  const galleryHeight = height/1.75;
  const galleryWidth = useColumnLayout ? width/1.5 : width/3.5;
  const extraMargin = useColumnLayout ? '10%' : 0;
  
  return (
    <Box>
      <Fade in={props.showHeader} timeout={2000}>
        <Stack
          direction={stackDirection}
          className="container"
          id="header-container">
          <Box id="header-left" width={boxWidth} sx={{ my: extraMargin }}>
            <Typography variant="h3">
              A NEW LINE OF NFTS FROM YOUR FAVORITE STREAMER
            </Typography>
            <Typography
              variant="h2"
              className="secondary"
              sx={{ fontWeight: 'bold' }}>
              CHIMASTERZEN
            </Typography>
          </Box>
          <Box id="header-right" width={boxWidth}>
            <Typography variant="h4" className="secondary" sx={{ fontWeight: 'bold' }}>
              FINALLY HERE!!!
            </Typography>
            <Carousel
              id="header-gallery-carousel"
              navButtonsAlwaysInvisible={true}
              interval={3000}
              navButtonsProps={{ style: { padding: 0 } }}>
              {
                headerImages.map((item) => (
                  <Box
                    className="header-gallery"
                    component="img"
                    src={item}
                    height={galleryHeight}
                    width={galleryWidth}
                  />
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
