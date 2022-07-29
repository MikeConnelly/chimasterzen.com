import React, { Component } from "react";
import { Box, Stack, Modal, Typography, Button } from "@mui/material"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

class Preview extends Component {
  render() {
    return (
      <Modal
        className="modal"
        open={this.props.open}
        onClose={this.props.handleClose}>
        <Stack
          id="modal-contents"
          sx={{ height: '70vh', width: '55vh' }}>
          <Typography variant="h2">{this.props.item.title}</Typography>
          <Typography variant="h4">{this.props.item.type.toUpperCase()} NFT</Typography>
          <Stack direction="row">
            <Button onClick={(e) => this.props.setItem(this.props.item.index - 1)}>
              <ArrowBackIosRoundedIcon
                sx={{ color: 'white', backgroundColor: '#ff007f', borderRadius: '10px', padding: '10px' }}
              />
            </Button>
            <Box
              className={`${this.props.item.type}-gallery`}
              component="img"
              src={this.props.item.img}
              sx={{ height: 300, width: 250 }}
            />
            <Button onClick={(e) => this.props.setItem(this.props.item.index + 1)}>
              <ArrowForwardIosRoundedIcon
                sx={{ color: 'white', backgroundColor: '#ff007f', borderRadius: '10px', padding: '10px' }}
              />
            </Button>
          </Stack>
          <Typography variant="h4" sx={{ color: '#6fd336' }}>{this.props.item.price}</Typography>
          <Typography variant="h4">Only {this.props.item.stock} Remaining!</Typography>
          <Stack direction="row" sx={{ mt: '10px' }}>
            <Button
              sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}
              onClick={this.props.handleClose}>
              Close
            </Button>
            <Button
              sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}
              onClick={this.props.handleAddToCart}>
              Add to Cart
            </Button>
          </Stack>
        </Stack>
      </Modal>
    );
  }
}

export default Preview;
