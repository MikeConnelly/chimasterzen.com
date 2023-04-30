import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Preview from './Preview';
import ShopGallery from "./ShopGallery";
import images from '../images';
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    const defaultPreviewItem = {
      img: null,
      title: 'title',
      price: '$0',
      stock: '0',
      type: 'premium'
    };
    this.state = {
      openPreview: false,
      previewItem: defaultPreviewItem
    };
  }

  openPreview = (item) => {
    this.setState({ openPreview: true, previewItem: item });
  }

  closePreview = () => {
    this.setState({ openPreview: false });
  }

  setPreviewItem = (index) => {
    const imageList = images()
    if (index < 0 || index >= imageList.length) {
      return;
    }
    this.setState({ previewItem: imageList[index] });
  }

  handleAddToCart = () => {
    this.props.addToCart(this.state.previewItem);
    this.setState({ openPreview: false });
  }

  render() {
    return (
      <Box className="container" id="shop-container" sx={{ py: 16 }}>
        <Typography id="shop-header" variant="h1">Shop ZenFTs</Typography>
        <Typography variant="h4">Click to add to cart</Typography>
        <Typography className="premium-text" variant="h2">Premium edition</Typography>
        <Typography variant="h5" color="primary">Only 100 minted!</Typography>
        <Box id="premium-gallery-container" sx={{ my: '24px' }}>
          <ShopGallery galleryType="premium" openPreview={this.openPreview} />
        </Box>
        <Typography className="standard-text" variant="h2">Standard edition</Typography>
        <Typography variant="h5" color="primary">Only 1000 minted!</Typography>
        <Box
          id="standard-gallery-container"
          sx={{ my: '24px' }}>
          <ShopGallery galleryType="standard" openPreview={this.openPreview} />
        </Box>
        <Preview
          open={this.state.openPreview}
          handleClose={this.closePreview}
          item={this.state.previewItem}
          setItem={this.setPreviewItem}
          handleAddToCart={this.handleAddToCart}
        />
      </Box>
    );
  }
}

export default Shop;
