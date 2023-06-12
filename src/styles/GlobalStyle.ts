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
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 80%;
  background: #B250B0;
  box-shadow: 0px 0px 4px #CE8DF2;
  border-radius: 0px;
  
  &:disabled {
    background-color: #CE8DF2;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #B250B0;
  }
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
