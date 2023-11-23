import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopProvider from './context/shopContext';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

//EXTEND CHAKRA UI THEME

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Mono, monospace;',
    body: 'IBM Plex Mono, monospace;',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <ShopProvider>
      <App />
    </ShopProvider>
  </ChakraProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
