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
  const galleryHeight = useColumnLayout ? height/2.5 : height/1.75;
  const galleryWidth = useColumnLayout ? width/1.5 : width/4;
  const extraMargin = useColumnLayout ? '15%' : 0;
  
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
              color="primary"
              sx={{ fontWeight: 'bold' }}>
              CHIMASTERZEN
            </Typography>
          </Box>
          <Box id="header-right" width={boxWidth}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
              FINALLY HERE!!!
            </Typography>
            <Carousel
              id="header-gallery-carousel"
              navButtonsAlwaysInvisible={true}
              interval={3000}
              navButtonsProps={{ style: { padding: 0 } }}>
              {headerImages.map((item) => (
                <Box
                  className="header-gallery"
                  component="img"
                  src={item}
                  height={galleryHeight}
                  width={galleryWidth}
                />
              ))}
            </Carousel>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              You can REALLY own it!
            </Typography>
          </Box>
        </Stack>
      </Fade>
    </Box>
  );
}
