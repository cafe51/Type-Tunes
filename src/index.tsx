import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/GlobalStyle';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppWrapper>
        <ContentWrapper>
          <App />
        </ContentWrapper>
        <Footer />
      </AppWrapper>
      
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
