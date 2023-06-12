import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  border: 1px solid white;
  width: 99%;

  background-color: #54008B;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterWrap>
        <div>
          <p className="mb-4">
            Desenvolvido por Japhé Nogueira
          </p>
        </div>
        <div>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </FooterWrap>
    );
  }
}

export default Footer;
