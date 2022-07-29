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
      trackIds: ['about-header', 'shop-header'],
      cart: []
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
          // about section
        } else if (id === 'shop-header') {
          // shop section
          // hide scroll arrow
          document.getElementById('scroll-arrow').style.display = 'none';
        }
      }
    }
  };

  addToCart = (item) => {
    this.setState({ cart: [...this.state.cart, item] });
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Navbar cart={this.state.cart} />

        <Header showHeader={this.state.showHeader} />

        <Shop cart={this.state.cart} addToCart={this.addToCart} />

        <About />

        <Fade id="scroll-arrow" in={this.state.showHeader} timeout={5000}>
          <KeyboardDoubleArrowDownIcon sx={{ bottom: "20px", position: "fixed", alignSelf: "center" }} />
        </Fade>
      </div>
    );
  }
}

export default App;
