import React from "react";
import ReactDOM from "react-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import backgroundImg from './img/tile_background.png';

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div 
        style={{
          backgroundImage: `url(${backgroundImg})`
        }}>
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
