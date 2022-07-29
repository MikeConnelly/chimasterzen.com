import React, { Component } from 'react'
import { Drawer, Typography, Stack, Box, List, Button } from '@mui/material';

class Cart extends Component {
  render() {
    return (
      <Drawer
        anchor="right"
        className="modal"
        open={this.props.open}
        onClose={this.props.handleClose}>
        <Stack
          id="drawer-contents">
          <Typography variant="h3">Your Cart</Typography>
          <Box id="cart-left" maxHeight="100%" overflow="auto">
            <List id="cart-list">
              {
                this.props.cart.map((item) => (
                  <Stack className="cart-item" direction="row">
                    <Box
                      className={`${item.type}-gallery`}
                      component="img"
                      src={item.img}
                    />
                    <Box>
                      <Typography className="cart-item-title" variant="h5">{item.title}</Typography>
                      <Typography className="cart-item-price" variant="p">{item.price}</Typography>
                    </Box>
                  </Stack>
                ))
              }
            </List>
          </Box>
          <Box id="cart-right" width="50%">
            <Typography variant="h5">Total: 0</Typography>
          </Box>
          <Button
            className="modal-button"
            onClick={this.props.handleClose}
            sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}>
            Close
          </Button>
        </Stack>
      </Drawer>
    );
  }
}

export default Cart;
