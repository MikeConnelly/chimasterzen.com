import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Menu, MenuItem } from "@mui/material";
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

function NavbarMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            handleScrollClick(e, "about-container");
          }}>
          <Typography variant="h6">
            About
          </Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            handleScrollClick(e, "shop-container");
          }}>
          <Typography variant="h6">
            Shop ZenFTs
          </Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em', color: 'white' }}
          onClick={(e) => {
            handleClose();
            props.setOpenLogin(true);
          }}>
          <AccountCircleIcon sx={{ mr: '4px' }} />
          <Typography variant="h6">
            Log in
          </Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em', color: 'white' }}
          onClick={(e) => {
            handleClose();
            props.setOpenCart(true);
          }}>
          <Badge badgeContent={props.cartLength} color="primary">
            <ShoppingCartIcon sx={{ mr: '4px' }} />
          </Badge>
          <Typography variant="h6" sx={{ float: 'right' }}>
            Cart
          </Typography>
        </MenuItem>
      </Menu>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Button
        sx={{ flexGrow: 1, justifyContent: 'left' }}
        onClick={(e) => handleScrollClick(e, "top")}>
        <Typography variant="h5" sx={{ color: 'white' }}>
          C.M.Z.
        </Typography>
      </Button>
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
          ? <NavbarMenu 
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
