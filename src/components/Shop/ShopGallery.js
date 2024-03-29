import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Stack } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const getImageList = (type, openPreview) => {
  const images = useSelector((state) => state.images);
  return images
    .filter((item) => item.type === type)
    .map((item) => (
      <Stack key={`gallery-img-${item.index}`} className="gallery-box">
        <Box
          className={`${item.type}-gallery`}
          component="img"
          src={item.img}
          sx={{ cursor: 'pointer' }}
          onClick={(e) => openPreview(item)}
        />
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="p" className="green">
          {item.price}
        </Typography>
        <Typography variant="p" color="primary">
          {item.stock} in stock
        </Typography>
      </Stack>
    ));
};

export default function ShopGallery(props) {
  const { width } = useWindowDimensions();
  let itemsToShow = 6;
  if (width < 700) {
    itemsToShow = 1;
  } else if (width < 850) {
    itemsToShow = 2;
  } else if (width < 960) {
    itemsToShow = 3;
  } else if (width < 1120) {
    itemsToShow = 4;
  } else if (width < 1200) {
    itemsToShow = 5;
  }

  return (
    <Carousel itemsToShow={itemsToShow} pagination={false}>
      {getImageList(props.galleryType, props.openPreview)}
    </Carousel>
  );
}
