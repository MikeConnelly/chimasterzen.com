import React, { Component } from "react";
import { Fade } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import backgroundImg from './img/tile_background.png';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showAbout: false,
      showAboutP1: false,
      showAboutP2: false,
      trackIds: ['about-header', 'shop-header'],
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
        if (id === 'about-header') {
          this.setState({ showAbout: true });
          setTimeout(() => {
            this.setState({ showAboutP1: true });
            setTimeout(() => {
              this.setState({ showAboutP2: true });
            }, 500);
          }, 500);
        } else if (id === 'shop-header') {
          console.log('shop');
          // setstate for some shop transition

          // hide scroll arrow
          document.getElementById('scroll-arrow').style.display = 'none';
        }
      }
    }
  };

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Navbar />

        <Header showHeader={this.state.showHeader} />

        <About
          showAbout={this.state.showAbout}
          showAboutP1={this.state.showAboutP1}
          showAboutP2={this.state.showAboutP2}
        />

        <Shop />

        <Fade id="scroll-arrow" in={this.state.showHeader} timeout={5000}>
          <KeyboardDoubleArrowDownIcon sx={{ bottom: "20px", position: "fixed", alignSelf: "center" }} />
        </Fade>
      </div>
    );
  }
}

export default App;
