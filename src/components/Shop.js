import React, { Component } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Preview from './Preview';
import Carousel from "react-elastic-carousel";
import images from '../images';

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
    if (index < 0 || index >= images.length) {
      return;
    }
    this.setState({ previewItem: images[index] });
  }

  handleAddToCart = () => {
    this.props.addToCart(this.state.previewItem);
    this.setState({ openPreview: false });
  }

  getImageList = (type) => {
    return images.filter((item) => item.type === type).map((item) => (
      <Stack className="gallery-box">
        <Box
          className={`${item.type}-gallery`}
          component="img"
          src={item.img}
          sx={{ cursor: 'pointer' }}
          onClick={(e) => this.openPreview(item)}
        />
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="p" className="green">{item.price}</Typography>
        <Typography variant="p" className="secondary">{item.stock} in stock</Typography>
      </Stack>
    ));
  }

  render() {
    return (
      <Box className="container" id="shop-container" sx={{ py: 16 }}>
        <Typography id="shop-header" variant="h1">Shop ZenFTs</Typography>
        <Typography variant="h2">Premium edition</Typography>
        <Typography variant="h5" className="secondary">Only 100 minted!</Typography>
        <Box id="premium-gallery-container" sx={{ my: '24px' }}>
          <Carousel
            itemsToShow={6}
            pagination={false}>
            {this.getImageList('premium')}
          </Carousel>
        </Box>
        <Typography variant="h2">Standard edition</Typography>
        <Typography variant="h5" className="secondary">Only 1000 minted!</Typography>
        <Box id="standard-gallery-container" sx={{ my: '24px' }}>
          <Carousel
            itemsToShow={6}
            pagination={false}>
            {this.getImageList('standard')}
          </Carousel>
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
