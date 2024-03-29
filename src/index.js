import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import App from './App';
import store from './store';
import backgroundImg from './assets/img/tile_background.png';
import reportWebVitals from './reportWebVitals';
import './index.css';

const globalTheme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#ff007f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    info: {
      main: '#00f',
    },
    background: {
      default: '#333',
    },
  },
});

let theme = createTheme(
  {
    components: {
      MuiButton: {
        variants: [
          {
            props: { color: 'primary' },
            style: {
              textTransform: 'none',
              border: 'none',
              backgroundColor: globalTheme.palette.primary.main,
              color: '#fff',
              borderRadius: 8,
              '&:hover': {
                color: globalTheme.palette.primary.main,
                backgroundColor: globalTheme.palette.primary.light,
              },
              '&:active': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: '#fff',
              },
            },
          },
        ],
      },
    },
  },
  globalTheme,
);
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundImage: `url(${backgroundImg})` }}>
          <App />
        </div>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
