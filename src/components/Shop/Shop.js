import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ShopGallery from './ShopGallery';
import Preview from './Preview';
import './Shop.css';

export default function Shop() {
  const imageList = useSelector((state) => state.images);
  const defaultPreviewItem = {
    img: null,
    title: 'title',
    price: '$0',
    stock: '0',
    type: 'premium',
  };
  const [openPreview, setOpenPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState(defaultPreviewItem);

  const handleOpenPreview = (item) => {
    setOpenPreview(true);
    setPreviewItem(item);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const handleSetPreviewItem = (index) => {
    if (index >= 0 && index < imageList.length) {
      setPreviewItem(imageList[index]);
    }
  };

  return (
    <Box className="container" id="shop-container" sx={{ py: 16 }}>
      <Typography id="shop-header" variant="h1">
        Shop ZenFTs
      </Typography>
      <Typography variant="h4">Click to add to cart</Typography>
      <Typography className="premium-text" variant="h2">
        Premium edition
      </Typography>
      <Typography variant="h5" color="primary">
        Only 100 minted!
      </Typography>
      <Box id="premium-gallery-container" sx={{ my: '24px' }}>
        <ShopGallery galleryType="premium" openPreview={handleOpenPreview} />
      </Box>
      <Typography className="standard-text" variant="h2">
        Standard edition
      </Typography>
      <Typography variant="h5" color="primary">
        Only 1000 minted!
      </Typography>
      <Box id="standard-gallery-container" sx={{ my: '24px' }}>
        <ShopGallery galleryType="standard" openPreview={handleOpenPreview} />
      </Box>
      <Preview open={openPreview} handleClose={handleClosePreview} item={previewItem} setItem={handleSetPreviewItem} />
    </Box>
  );
}
