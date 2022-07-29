import React, { Component } from "react";
import { Typography, Box } from "@mui/material";

class About extends Component {
  render() {
    return (
      <Box id="about-container" className="container" sx={{ py: 16 }}>
        <Typography id="about-header" variant="h1">
          About ZenFTs
        </Typography>
        <Box id="about-p1">
          <Typography variant="p">
            who is ChiMasterZen...
          </Typography>
        </Box>
        <Box id="about-p2">
          <Typography variant="p">
            we have decided to create a new line of NFTs to...
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default About;
