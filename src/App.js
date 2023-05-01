import React, { Component } from "react";
import { Snackbar, Alert, Fade } from "@mui/material";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      trackIds: ['about-header', 'shop-header'],
      openLogin: false,
      openCart: false,
      openSnackbar: false
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

  setOpenLogin = (bool) => {
    this.setState({ openLogin: bool });
  }

  setOpenCart = (bool) => {
    this.setState({ openCart: bool });
  }

  handleOpenSnackbar = () => {
    this.setState({ openLogin: false, openCart: false, openSnackbar: true });
  }

  handleCloseSnackbar = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openSnackbar: false });
  }

  render() {
    const { showHeader, openLogin, openCart, openSnackbar } = this.state;
    return (
      <div className="App">
        <Navbar setOpenLogin={this.setOpenLogin} setOpenCart={this.setOpenCart} />

        <Header showHeader={showHeader} />

        <About />

        <Shop />

        <Fade id="scroll-arrow" in={showHeader} timeout={5000}>
          <KeyboardDoubleArrowDownIcon sx={{ bottom: "20px", position: "fixed", alignSelf: "center" }} />
        </Fade>
        <Login
          open={openLogin}
          handleClose={() => this.setOpenLogin(false)}
          handleLogin={this.handleOpenSnackbar}
          handleCreateAccount={this.handleOpenSnackbar}
        />
        <Cart
          open={openCart}
          handleClose={() => this.setOpenCart(false)}
          handleCartLogin={() => this.setOpenLogin(true)}
          handleContinueAsGuest={this.handleOpenSnackbar}
        />
        <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={this.handleCloseSnackbar}>
          <Alert onClose={this.handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
            An error occurred. Please Try again later.
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default App;
