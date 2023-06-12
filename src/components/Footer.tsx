import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbHexagonLetterJ } from 'react-icons/tb';


const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  background: radial-gradient(
      89.23% 1958.28% at 95.38% 49.55%,
      #56008D 2.32%,
      #350B53 16.93%,
      #221828 38.86%,
      #1F1523 63.89%,
      #24162D 72.69%,
      #25162E 81.14%
    );
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.8);
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
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
        <SocialMediaContainer>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <TbHexagonLetterJ size={28} />
          </a>
        </SocialMediaContainer>
      </FooterWrap>
    );
  }
}
export default Footer;
