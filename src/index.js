import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './config/theme';

ReactDOM.render(
  /** 通过注入 ThemeProvider 来动态改变主题 */
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
