import React, { Component } from 'react'
import { Modal, Typography } from '@mui/material';

class Cart extends Component {
  render() {
    return (
      <Modal
        className="modal"
        open={this.props.open}>
        <Typography>hi</Typography>
      </Modal>
    );
  }
}

export default Cart;
