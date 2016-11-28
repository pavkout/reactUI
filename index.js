import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import ThemeProvider from 'themeProvider';
const theme = {
  dark: {
    color: '#fff',
    backgroundColor: '#cc3300',
    border: 'inherit'
  },
  light: {
    color: '#cc3300',
    backgroundColor: '#fff',
    border: '1px solid #cc3300'
  }
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'));
