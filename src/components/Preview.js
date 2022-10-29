import React from "react";
import { Box, Stack, Modal, Typography, Button } from "@mui/material"
import useWindowDimensions from "../hooks/useWindowDimensions";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function Preview(props) {
  const { height, width } = useWindowDimensions();
  const previewHeight = height/2.5;
  const previewWidth = width/6;

  return (
    <Modal
      className="modal"
      open={props.open}
      onClose={props.handleClose}>
      <Stack id="modal-contents">
        <Typography variant="h2">{props.item.title}</Typography>
        <Typography variant="h4">{props.item.type.toUpperCase()} NFT</Typography>
        <Stack direction="row">
          <Button onClick={(e) => props.setItem(props.item.index - 1)}>
            <ArrowBackIosRoundedIcon
              sx={{ color: 'white', backgroundColor: '#ff007f', borderRadius: '10px', padding: '10px' }}
            />
          </Button>
          <Box
            className={`${props.item.type}-gallery`}
            component="img"
            src={props.item.img}
            sx={{ height: previewHeight, width: previewWidth }}
          />
          <Button onClick={(e) => props.setItem(props.item.index + 1)}>
            <ArrowForwardIosRoundedIcon
              sx={{ color: 'white', backgroundColor: '#ff007f', borderRadius: '10px', padding: '10px' }}
            />
          </Button>
        </Stack>
        <Typography variant="h4" sx={{ color: '#6fd336' }}>{props.item.price}</Typography>
        <Typography variant="h4">Only {props.item.stock} Remaining!</Typography>
        <Stack direction="row" sx={{ mt: '10px' }}>
          <Button
            sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}
            onClick={props.handleClose}>
            Close
          </Button>
          <Button
            sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}
            onClick={props.handleAddToCart}>
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
