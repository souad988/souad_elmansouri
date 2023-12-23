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
      main: '#73BBC9',
      light: '#4296a5',
    },
    secondary: {
      main: '#F1D4E5',
      light: '#FCE9F1',
    },
    third: {
      main: '#fff',
    },
    background: {
      default: '#fff',
      layout: '#080202',
    },
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
