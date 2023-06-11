import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  h1 {
    font-size: 32px;
  }

  h4 {
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    color: white;
    text-shadow: 0px 0px 10px #C881F8;
    background-color: green;
    background: linear-gradient(90deg,
      #25162E 34.29%,
      #7F11B0 65.42%,
      #54008B 87.83%
      );
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
