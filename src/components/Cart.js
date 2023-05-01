import React from 'react'
import { useSelector } from 'react-redux';
import { Drawer, Typography, Stack, Box, List, Button, ListItem, Divider } from '@mui/material';
import "./Cart.css";

function getCartTotal(cart) {
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.substring(1)), 0);
  return total.toFixed(2);
}

export default function Cart(props) {
  const cart = useSelector(state => state.cart);
  return (
    <Drawer
      anchor="right"
      id="cart-drawer"
      className="modal"
      open={props.open}
      onClose={props.handleClose}>
      <Stack
        id="drawer-contents"
        maxHeight="100%"
        overflow="auto"
        sx={{ alignItems: 'center' }}>
        <Typography variant="h3">Your Cart</Typography>
        <List id="cart-list">
          {
            cart.map((item) => (
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
        <Typography variant="h5">Total: ${getCartTotal(cart)}</Typography>
        <Button
          onClick={props.handleCartLogin}
          sx={{ my: 1 }}>
          Login
        </Button>
        <Typography variant="p">OR</Typography>
        <Button
          onClick={props.handleContinueAsGuest}
          sx={{ my: 1 }}>
          Checkout as Guest
        </Button>
      </Stack>
    </Drawer>
  );
}
