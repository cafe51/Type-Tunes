import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: white;
    scrollbar-width: thick;
    scrollbar-color: pink transparent;
  }

  *::-webkit-scrollbar {
  width: 12px;
  }

  *::-webkit-scrollbar-track {
    background-color: #C881F8;
  }

  *::-webkit-scrollbar-thumb {
  background-color: #410B67;
  border-radius: 20px;
  border: 3px solid transparent;
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

  input, textarea {
    width: 100%;
    height: 46px;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    text-align: center;
    background: rgba(200, 129, 248, 0.9);
    border-radius: 8px;
    &:focus {
      background: #82488D;
      outline-style: solid;
      outline-width: 2px;
      outline-color: #B250B0;

    }
    &::placeholder {
      font-size: 16px;
      color: #82488D;
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
