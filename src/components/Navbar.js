import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Drawer, Stack } from "@mui/material";
import Login from './Login';
import Cart from './Cart';
import useWindowDimensions from "../hooks/useWindowDimensions";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

function handleScrollClick(e, sectionId) {
  e.preventDefault();
  if (sectionId === "top") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    let section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: "smooth" });
  }
}

function NavbarDrawer(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack
          id="navbar-drawer"
          direction="column">
          <Button
            sx={{ mx: '2em' }}
            onClick={(e) => {
              setOpenDrawer(false);
              handleScrollClick(e, "about-container")}
            }>
            <Typography variant="h6" sx={{ color: 'white' }}>
              About
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em' }}
            onClick={(e) => {
              setOpenDrawer(false);
              handleScrollClick(e, "shop-container")}
            }>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Shop ZenFTs
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em', color: 'white' }}
            onClick={(e) => {
              setOpenDrawer(false);
              props.setOpenLogin(true)}
            }>
            <AccountCircleIcon sx={{ mr: '4px' }} />
            <Typography variant="h6">
              Log in
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em', color: 'white' }}
            onClick={(e) => {
              setOpenDrawer(false);
              props.setOpenCart(true)}
            }>
            <Badge badgeContent={props.cartLength} color="primary">
              <ShoppingCartIcon sx={{ mr: '4px' }} />
            </Badge>
            <Typography variant="h6" sx={{ float: 'right' }}>
              Cart
            </Typography>
          </Button>
        </Stack>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default function Navbar(props) {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { height, width } = useWindowDimensions();
  const useDrawer = width < 960;
  
  return (
    <AppBar id="navbar" position="fixed" sx={{ px: 10 }}>
      <Toolbar>
        {useDrawer 
          ? <NavbarDrawer 
              cartLength={props.cart.length}
              setOpenLogin={setOpenLogin}
              setOpenCart={setOpenCart}
            />
          : <>
              <Button
                sx={{ flexGrow: 1, justifyContent: 'left' }}
                onClick={(e) => handleScrollClick(e, "top")}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  C.M.Z.
                </Typography>
              </Button>
      
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => handleScrollClick(e, "about-container")}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  About
                </Typography>
              </Button>
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => handleScrollClick(e, "shop-container")}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  Shop ZenFTs
                </Typography>
              </Button>
              <Button
                sx={{ mx: '2em', color: 'white' }}
                onClick={(e) => setOpenLogin(true)}>
                <AccountCircleIcon sx={{ mr: '4px' }} />
                <Typography variant="h6">
                  Log in
                </Typography>
              </Button>
              <Button
                sx={{ mx: '2em', color: 'white' }}
                onClick={(e) => setOpenCart(true)}>
                <Badge badgeContent={props.cart.length} color="primary">
                  <ShoppingCartIcon sx={{ mr: '4px' }} />
                </Badge>
                <Typography variant="h6" sx={{ float: 'right' }}>
                  Cart
                </Typography>
              </Button>
            </>
        }
      </Toolbar>
      <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
      <Cart open={openCart} cart={props.cart} handleClose={() => setOpenCart(false)} />
    </AppBar>
  );
}
