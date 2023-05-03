import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Stack, Modal, Typography, Button } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { addToCart } from '../../store';

function mobilePreview(props) {
  const previewHeight = 250;
  const previewWidth = 180;

  return (
    <Stack direction="column" sx={{ alignItems: 'center', my: 2 }}>
      <Box
        className={`${props.item.type}-gallery`}
        component="img"
        src={props.item.img}
        sx={{ height: previewHeight, width: previewWidth }}
      />
      <Stack direction="row" sx={{ mt: 1 }}>
        <Button sx={{ mx: 1, height: '30%', width: '10%' }} onClick={(e) => props.setItem(props.item.index - 1)}>
          <ArrowBackIosRoundedIcon />
        </Button>
        <Button sx={{ mx: 1, height: '30%', width: '10%' }} onClick={(e) => props.setItem(props.item.index + 1)}>
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

function desktopPreview(props, previewHeight, previewWidth) {
  return (
    <Stack direction="row" sx={{ alignItems: 'center', my: 4 }}>
      <Button sx={{ mx: 4, height: '30%', width: '10%' }} onClick={(e) => props.setItem(props.item.index - 1)}>
        <ArrowBackIosRoundedIcon />
      </Button>
      <Box
        className={`${props.item.type}-gallery`}
        component="img"
        src={props.item.img}
        sx={{ height: previewHeight, width: previewWidth }}
      />
      <Button sx={{ mx: 4, height: '30%', width: '10%' }} onClick={(e) => props.setItem(props.item.index + 1)}>
        <ArrowForwardIosRoundedIcon />
      </Button>
    </Stack>
  );
}

export default function Preview(props) {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const previewHeight = height / 2.5;
  const previewWidth = width / 5.5;
  const useMobileLayout = width < 960;

  const handleAddToCart = () => {
    dispatch(addToCart(props.item));
    props.handleClose();
  };

  return (
    <Modal className="modal" open={props.open} onClose={props.handleClose}>
      <Stack className="modal-contents" sx={{ backgroundColor: 'background.default', padding: 6 }}>
        <Typography variant="h2" color="secondary">
          {props.item.title}
        </Typography>
        <Typography className={`${props.item.type}-text`} variant="h4">
          {props.item.type.toUpperCase()} NFT
        </Typography>
        {useMobileLayout ? mobilePreview(props) : desktopPreview(props, previewHeight, previewWidth)}
        <Typography variant="h4" sx={{ color: '#6fd336' }}>
          {props.item.price}
        </Typography>
        <Typography variant="h4" color="secondary">
          Only {props.item.stock} Remaining!
        </Typography>
        <Stack direction="row" sx={{ mt: '10px' }}>
          <Button sx={{ margin: '8px' }} onClick={props.handleClose}>
            Close
          </Button>
          <Button sx={{ margin: '8px' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
