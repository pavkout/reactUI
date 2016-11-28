import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import ThemeProvider from 'themeProvider';
const theme = {
  color: '#cc3300',
  backgroundColor: '#cc3300'
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'));
