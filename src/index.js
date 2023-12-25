import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as EmoThemeProvider } from '@emotion/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0892ad',
      light: '#4296a5',
    },
    secondary: {
      main: '#c5177d',
      light: '#FCE9F1',
    },
    headline: {
      main: '#0892ad',
      secondary: '#c5177d',
    },
    third: {
      main: '#fff',
    },
    background: {
      default: '#fff',
      layout: '#080202',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  fonts: {
    primary: 'Roboto',
    secondary: 'Lato',
    headline: 'Prata',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <EmoThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </EmoThemeProvider>
  </ThemeProvider>,
);

reportWebVitals();
