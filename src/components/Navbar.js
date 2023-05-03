import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Badge, Menu, MenuItem, Fab } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { withStyles } from '@mui/styles';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './Navbar.css';

const styles = (theme) => ({
  customBadge: {
    backgroundColor: 'blue',
    color: 'white',
  },
});

function handleScrollClick(e, sectionId, callback) {
  e.preventDefault();
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    let section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth' });
  }
  if (callback) {
    callback();
  }
}

function NavbarMenu({ classes, cartSize, setOpenLogin, setOpenCart }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu id="nav-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            setOpenLogin(true);
          }}
        >
          <AccountCircleIcon sx={{ mr: '4px' }} />
          <Typography variant="h6">Log in</Typography>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{ mx: '2em' }}
          onClick={(e) => {
            handleClose();
            setOpenCart(true);
          }}
        >
          <Badge classes={{ badge: classes.customBadge }} badgeContent={cartSize}>
            <ShoppingCartIcon sx={{ mr: '4px' }} />
          </Badge>
          <Typography variant="h6" sx={{ float: 'right' }}>
            Cart
          </Typography>
        </MenuItem>
      </Menu>
      <IconButton onClick={handleClick}>
        <MenuIcon color="secondary" />
      </IconButton>
      <Button sx={{ ml: 3 }} onClick={(e) => handleScrollClick(e, 'top')}>
        <Typography variant="h5">C.M.Z.</Typography>
      </Button>
    </>
  );
}

function navbarContent(classes, cartSize, setOpenLogin, setOpenCart) {
  return (
    <>
      <Button sx={{ justifyContent: 'left' }} onClick={(e) => handleScrollClick(e, 'top')}>
        <Typography variant="h5">C.M.Z.</Typography>
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button sx={{ mx: '2em' }} onClick={(e) => handleScrollClick(e, 'about-container')}>
        <Typography variant="h6">About</Typography>
      </Button>
      <Button sx={{ mx: '2em' }} onClick={(e) => handleScrollClick(e, 'shop-container')}>
        <Typography variant="h6">Shop ZenFTs</Typography>
      </Button>
      <Button sx={{ mx: '2em' }} onClick={(e) => setOpenLogin(true)}>
        <AccountCircleIcon sx={{ mr: '4px' }} />
        <Typography variant="h6">Log in</Typography>
      </Button>
      <Button sx={{ mx: '2em' }} onClick={(e) => setOpenCart(true)}>
        <Badge classes={{ badge: classes.customBadge }} badgeContent={cartSize}>
          <ShoppingCartIcon sx={{ mr: '4px' }} />
        </Badge>
        <Typography variant="h6" sx={{ float: 'right' }}>
          Cart
        </Typography>
      </Button>
    </>
  );
}

function cartFab(classes, cartSize, setOpenCart) {
  return (
    <Fab color="primary" onClick={(e) => setOpenCart(true)} sx={{ position: 'fixed', top: 80, right: 20 }}>
      <Badge classes={{ badge: classes.customBadge }} badgeContent={cartSize}>
        <ShoppingCartIcon />
      </Badge>
    </Fab>
  );
}

function Navbar({ classes, setOpenLogin, setOpenCart }) {
  const cartSize = useSelector((state) => state.cart).length;
  const { width } = useWindowDimensions();
  const useDrawer = width < 960;

  return (
    <AppBar id="navbar" position="fixed" color="primary" sx={{ px: 10 }}>
      <Toolbar>
        {useDrawer ? (
          <NavbarMenu classes={classes} cartSize={cartSize} setOpenLogin={setOpenLogin} setOpenCart={setOpenCart} />
        ) : (
          navbarContent(classes, cartSize, setOpenLogin, setOpenCart)
        )}
      </Toolbar>
      {useDrawer && cartSize > 0 && cartFab(classes, cartSize, setOpenCart)}
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
