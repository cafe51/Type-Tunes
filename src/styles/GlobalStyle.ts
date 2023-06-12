import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: white;
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
    background: linear-gradient(90deg,
      #25162E 34.29%,
      #7F11B0 65.42%,
      #54008B 87.83%
      );
    /* flex: 1; */

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
