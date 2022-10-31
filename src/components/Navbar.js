import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Badge, Menu, MenuItem, Fab } from "@mui/material";
import Login from './Login';
import Cart from './Cart';
import useWindowDimensions from "../hooks/useWindowDimensions";
import { withStyles } from '@mui/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const styles = theme => ({
  customBadge: {
    backgroundColor: 'blue',
    color: 'white'
  }
});

function handleScrollClick(e, sectionId, callback) {
  e.preventDefault();
  if (sectionId === "top") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    let section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: "smooth" });
  }
  if (callback) {
    callback();
  }
}

function NavbarMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { classes, cartLength } = props;
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
            handleScrollClick(e, "about-container", handleClose);
          }}>
          <Typography variant="h6">About</Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleScrollClick(e, "shop-container", handleClose);
          }}>
          <Typography variant="h6">Shop ZenFTs</Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            props.setOpenLogin(true);
          }}>
          <AccountCircleIcon sx={{ mr: '4px' }} />
          <Typography variant="h6">Log in</Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            props.setOpenCart(true);
          }}>
          <Badge
            classes={{ badge: classes.customBadge }}
            badgeContent={cartLength}>
            <ShoppingCartIcon sx={{ mr: '4px' }} />
          </Badge>
          <Typography variant="h6" sx={{ float: 'right' }}>Cart</Typography>
        </MenuItem>
      </Menu>
      <IconButton onClick={handleClick}>
        <MenuIcon color="secondary" />
      </IconButton>
      <Button
        sx={{ flexGrow: 1, justifyContent: 'left' }}
        onClick={(e) => handleScrollClick(e, "top")}>
        <Typography variant="h5">C.M.Z.</Typography>
      </Button>
    </>
  );
}

function Navbar(props) {
  const { classes } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { width } = useWindowDimensions();
  const useDrawer = width < 960;
  
  return (
    <AppBar id="navbar" position="fixed" color="primary" sx={{ px: 10 }}>
      <Toolbar>
        {useDrawer 
          ? <NavbarMenu
              classes={classes}
              cartLength={props.cart.length}
              setOpenLogin={setOpenLogin}
              setOpenCart={setOpenCart}
            />
          : <>
              <Button
                sx={{ justifyContent: 'left' }}
                onClick={(e) => handleScrollClick(e, "top")}>
                <Typography variant="h5">C.M.Z.</Typography>
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => handleScrollClick(e, "about-container")}>
                <Typography variant="h6">About</Typography>
              </Button>
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => handleScrollClick(e, "shop-container")}>
                <Typography variant="h6">Shop ZenFTs</Typography>
              </Button>
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => setOpenLogin(true)}>
                <AccountCircleIcon sx={{ mr: '4px' }} />
                <Typography variant="h6">Log in</Typography>
              </Button>
              <Button
                sx={{ mx: '2em' }}
                onClick={(e) => setOpenCart(true)}>
                <Badge
                  classes={{ badge: classes.customBadge }}
                  badgeContent={props.cart.length}>
                  <ShoppingCartIcon sx={{ mr: '4px' }} />
                </Badge>
                <Typography variant="h6" sx={{ float: 'right' }}>Cart</Typography>
              </Button>
            </>
        }
      </Toolbar>
      {
        useDrawer && props.cart.length > 0
        ? <Fab
            color="primary"
            onClick={(e) => setOpenCart(true)}
            sx={{ position: 'fixed', top: 80, right: 20 }}>
            <Badge
              classes={{ badge: classes.customBadge }}
              badgeContent={props.cart.length}>
              <ShoppingCartIcon />
            </Badge>
          </Fab>
        : <></>
      }
      <Login
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
        handleLogin={() => {}}
        handleCreateAccount={() => {}}
      />
      <Cart
        open={openCart}
        cart={props.cart}
        handleClose={() => setOpenCart(false)}
        handleCartLogin={() => setOpenLogin(true)}
        handleContinueAsGuest={() => {}}
      />
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
