import React, { Component } from "react";
import { Typography, Box, Slide, Fade } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";
import chi_football from "./img/chi_football.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showAbout: false,
      showAboutP1: false,
      showAboutP2: false,
      trackIds: ["about-header"],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    for (let i = 0; i <= this.state.trackIds.length; i++) {
      const id = this.state.trackIds[i];
      const trackedEl = document.getElementById(id);

      if (trackedEl && window.scrollY > trackedEl.offsetTop / 3) {
        if (id === "about-header") {
          this.setState({ showAbout: true });
          setTimeout(() => {
            this.setState({ showAboutP1: true });
            setTimeout(() => {
              this.setState({ showAboutP2: true });
            }, 500);
          }, 500);
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <Fade in={this.state.showHeader} timeout={2000}>
          <Box
            className="container"
            id="header-container"
            sx={{ mt: 4, display: "flex", flexDirection: "row" }}
          >
            <Box className="header-left" sx={{ flexGrow: 1 }}>
              <Typography variant="h3" className="secondary">
                FINALLY HERE!
              </Typography>
              <Typography variant="h1">
                A NEW LINE OF NFTS FROM YOUR FAVORITE STREAMER CHIMASTERZEN
              </Typography>
            </Box>
            <Box className="header-right" sx={{ flexGrow: 1 }}>
              <Box component="img" src={chi_football}></Box>
              <Typography variant="h5" className="secondary">
                You can REALLY own it!
              </Typography>
            </Box>
          </Box>
        </Fade>

        <Box id="about-container" className="container" sx={{ py: 16 }}>
          <Slide direction="right" in={this.state.showAbout} timeout={500}>
            <Typography id="about-header" variant="h1">
              About ZenFTs
            </Typography>
          </Slide>
          <Slide direction="right" in={this.state.showAboutP1} timeout={500}>
            <Box id="about-p1">
              <Typography variant="p">who is ChiMasterZen...</Typography>
            </Box>
          </Slide>
          <Slide direction="right" in={this.state.showAboutP2} timeout={500}>
            <Box id="about-p2">
              <Typography variant="p">
                we have decided to create a new line of NFTs to...
              </Typography>
            </Box>
          </Slide>
        </Box>

        <Box className="container" id="shop-container" sx={{ py: 16 }}>
          <h1>Shop NFTs</h1>
          <h2>Premium edition (only 100 minted)</h2>
          <p>carousel of Kyle pics</p>
          <h2>Standard edition (only 1000 minted)</h2>
          <p>carousel of Kyle pics</p>
          <p>
            (hover over pics to select add to cart, icon will appear on cart)
          </p>
        </Box>

        <Typography
          sx={{ bottom: "20px", position: "fixed", alignSelf: "center" }}
        >
          Keep Scrolling
        </Typography>
      </div>
    );
  }
}

export default App;
