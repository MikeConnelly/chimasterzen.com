import React, { Component } from "react";
import { Box, Stack, Typography, Fade } from "@mui/material";
import Preview from './Preview';
import chi_football from "../img/chi_football.jpg";
import wolf1 from "../img/wolf1.jpg"
import wolf2 from "../img/wolf2.jpg"
import wolf3 from "../img/wolf3.jpg"
import wolf4 from "../img/wolf4.jpg"
import wolf5 from "../img/wolf5.jpg"
import wolf6 from "../img/wolf6.jpg"
import wolf7 from "../img/wolf7.jpg"
import wolf8 from "../img/wolf8.jpg"
import Carousel from "react-elastic-carousel";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.premiumImages = [
      chi_football,
      wolf1,
      wolf2,
      wolf3,
      wolf4,
      wolf5,
      wolf6,
      wolf7,
      wolf8
    ];
    this.standardImages = [
      chi_football,
      wolf1,
      wolf2,
      wolf3,
      wolf4,
      wolf5,
      wolf6,
      wolf7,
      wolf8
    ];
    this.state = {
      openPreview: false,
      previewItem: null
    };
  }

  openPreview = (item) => {
    this.setState({ openPreview: true, previewItem: item });
  }

  render() {
    return (
      <Box className="container" id="shop-container" sx={{ py: 16 }}>
        <Typography id="shop-header" variant="h1">Shop ZenFTs</Typography>
        <h2>Premium edition (only 100 minted)</h2>
        <Box id="premium-gallery-container">
          <Carousel
            itemsToShow={6}
            pagination={false}
            focusOnSelect={true}>
            {
              this.premiumImages.map((item, i) => (
                <Box
                  className="premium-gallery"
                  component="img"
                  src={item}
                  sx={{ cursor: 'pointer' }}
                  onClick={(e) => this.openPreview(item)}
                />
              ))
            }
          </Carousel>
        </Box>
        <h2>Standard edition (only 1000 minted)</h2>
        <Box id="premium-gallery-container">
          <Carousel
            itemsToShow={6}
            pagination={false}
            focusOnSelect={true}>
            {
              this.standardImages.map((item, i) => (
                <Box
                  className="standard-gallery"
                  component="img"
                  src={item}
                  sx={{ cursor: 'pointer' }}
                  onClick={(e) => this.openPreview(item)}
                />
              ))
            }
          </Carousel>
        </Box>
        <Preview open={this.state.openPreview} item={this.state.previewItem} />
      </Box>
    );
  }
}

export default Shop;
