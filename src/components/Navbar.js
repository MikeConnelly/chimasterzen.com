import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Navbar extends Component {
  handleScrollClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === "top") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      let section = document.getElementById(sectionId);
      section && section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <AppBar id="navbar" position="fixed" sx={{ px: 8 }}>
        <Toolbar>
          <Button
            sx={{ mr: '16em' }}
            onClick={(e) => this.handleScrollClick(e, "top")}>
            <Typography variant="h5" sx={{ color: 'white' }}>
              C.M.Z.
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em' }}
            onClick={(e) => this.handleScrollClick(e, "about-container")}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              About Us
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em' }}
            onClick={(e) => this.handleScrollClick(e, "shop-container")}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Shop ZenFTs
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em', color: 'white' }}
            onClick={(e) => {}}>
            <AccountCircleIcon sx={{ mr: '4px' }} />
            <Typography variant="h6">
              Log in
            </Typography>
          </Button>
          <Button
            sx={{ mx: '2em', color: 'white' }}
            onClick={(e) => {}}>
            <ShoppingCartIcon sx={{ mr: '4px' }} />
            <Typography variant="h6">
              Cart
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
