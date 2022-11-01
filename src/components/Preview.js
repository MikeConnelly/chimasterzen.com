import React from "react";
import { Box, Stack, Modal, Typography, Button } from "@mui/material"
import useWindowDimensions from "../hooks/useWindowDimensions";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

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
        <Button
          sx={{ mx: 1, height: '30%', width: '10%' }}
          onClick={(e) => props.setItem(props.item.index - 1)}>
          <ArrowBackIosRoundedIcon />
        </Button>
        <Button
          sx={{ mx: 1, height: '30%', width: '10%' }}
          onClick={(e) => props.setItem(props.item.index + 1)}>
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default function Preview(props) {
  const { height, width } = useWindowDimensions();
  const previewHeight = height/2.5;
  const previewWidth = width/5.5;
  const useMobileLayout = width < 960;

  return (
    <Modal
      className="modal"
      open={props.open}
      onClose={props.handleClose}>
      <Stack
        className="modal-contents"
        sx={{ backgroundColor: 'background.default', padding: 6 }}>
        <Typography
          variant="h2"
          color="secondary">
          {props.item.title}
        </Typography>
        <Typography
          className={`${props.item.type}-text`}
          variant="h4">
          {props.item.type.toUpperCase()} NFT
        </Typography>
        {
          useMobileLayout
          ? mobilePreview(props)
          : <Stack
              direction="row"
              sx={{ alignItems: 'center', my: 4 }}>
              <Button
                sx={{ mx: 4, height: '30%', width: '10%' }}
                onClick={(e) => props.setItem(props.item.index - 1)}>
                <ArrowBackIosRoundedIcon />
              </Button>
              <Box
                className={`${props.item.type}-gallery`}
                component="img"
                src={props.item.img}
                sx={{ height: previewHeight, width: previewWidth }}
              />
              <Button
                sx={{ mx: 4, height: '30%', width: '10%' }}
                onClick={(e) => props.setItem(props.item.index + 1)}>
                <ArrowForwardIosRoundedIcon />
              </Button>
            </Stack>
        }
        <Typography variant="h4" sx={{ color: '#6fd336' }}>{props.item.price}</Typography>
        <Typography variant="h4" color="secondary">Only {props.item.stock} Remaining!</Typography>
        <Stack direction="row" sx={{ mt: '10px' }}>
          <Button
            sx={{ margin: '8px' }}
            onClick={props.handleClose}>
            Close
          </Button>
          <Button
            sx={{ margin: '8px' }}
            onClick={props.handleAddToCart}>
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
