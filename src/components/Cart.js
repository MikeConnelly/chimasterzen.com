import React, { Component } from 'react'
import { Drawer, Typography, Stack, Box, List, Button, ListItem, Divider } from '@mui/material';

function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + parseFloat(item.price.substring(1)), 0);
}

class Cart extends Component {
  render() {
    return (
      <Drawer
        anchor="right"
        id="cart-drawer"
        className="modal"
        open={this.props.open}
        onClose={this.props.handleClose}>
        <Stack
          id="drawer-contents"
          maxHeight="100%"
          overflow="auto"
          sx={{ alignItems: 'center' }}>
          <Typography variant="h3">Your Cart</Typography>
          <List id="cart-list">
            {
              this.props.cart.map((item) => (
                <>
                  <Divider />
                  <ListItem className="cart-item">
                    <Stack sx={{ alignItems: 'center' }}>
                      <Typography
                        className={`${item.type}-text`}
                        variant="h5">
                        {item.title}
                      </Typography>
                      <Box
                        className={`${item.type}-gallery`}
                        component="img"
                        src={item.img}
                        sx={{ my: 1 }}
                      />
                      <Typography className="green" variant="p">{item.price}</Typography>
                    </Stack>
                  </ListItem>
                </>
              ))
            }
            <Divider />
          </List>
          <Typography variant="h5">Total: ${getCartTotal(this.props.cart)}</Typography>
          <Button
            onClick={this.props.handleClose}
            sx={{ my: 1 }}>
            Login
          </Button>
          <Typography variant="p">OR</Typography>
          <Button
            onClick={this.props.handleClose}
            sx={{ my: 1 }}>
            Checkout as Guest
          </Button>
        </Stack>
      </Drawer>
    );
  }
}

export default Cart;
