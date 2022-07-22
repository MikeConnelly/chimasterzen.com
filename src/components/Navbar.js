import React, { Component } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
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
      <AppBar position="fixed" sx={{ px: 8 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={(e) => this.handleScrollClick(e, "top")}
          >
            CMZ
          </Typography>
          <Typography
            className="nav-divider"
            component="div"
            sx={{ flexGrow: 4 }}
          ></Typography>
          <Typography
            className="nav-header"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={(e) => this.handleScrollClick(e, "about-container")}
          >
            About Us
          </Typography>
          <Box
            sx={{ flexGrow: 1 }}
            onClick={(e) => this.handleScrollClick(e, "shop-container")}
          >
            <Typography variant="h6" component="div">
              Shop NFTs
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={(e) => {}}>
            <AccountCircleIcon />
            <Typography variant="h6" component="div">
              Log in
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={(e) => {}}>
            <ShoppingCartIcon />
            <Typography variant="h6" component="div">
              Cart
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
