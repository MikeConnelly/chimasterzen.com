import React, { Component } from "react";
import { Typography, Box, Slide } from "@mui/material";

class About extends Component {
  render() {
    return (
      <Box id="about-container" className="container" sx={{ py: 16 }}>
        <Slide direction="right" in={this.props.showAbout} timeout={500}>
          <Typography id="about-header" variant="h1">
            About ZenFTs
          </Typography>
        </Slide>
        <Slide direction="right" in={this.props.showAboutP1} timeout={500}>
          <Box id="about-p1">
            <Typography variant="p">who is ChiMasterZen...</Typography>
          </Box>
        </Slide>
        <Slide direction="right" in={this.props.showAboutP2} timeout={500}>
          <Box id="about-p2">
            <Typography variant="p">
                we have decided to create a new line of NFTs to...
            </Typography>
          </Box>
        </Slide>
      </Box>
    );
  }
}

export default About;
