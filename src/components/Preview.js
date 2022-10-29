import React, { Component } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";

class Preview extends Component {
  render() {
    return (
      <Modal
        id="preview-modal"
        open={this.props.open}>
        <Box id="modal-contents">
          <Box sx={{ height: 300, width: 250 }} component="img" src={this.props.item} />
          <Typography>item title</Typography>
          <Typography sx={{ color: 'green' }}>item price</Typography>
          <Button>Add to Cart</Button>
          <Button>Prev</Button>
          <Button>Next</Button>
        </Box>
      </Modal>
    );
  }
}

export default Preview;
