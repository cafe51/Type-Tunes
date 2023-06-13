import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbHexagonLetterJ } from 'react-icons/tb';
import { FooterWrap, SocialMediaContainer } from '../styles/FooterStyles';


class Footer extends React.Component {
  render() {
    return (
      <FooterWrap>
        <p className="mb-4">
          Desenvolvido por Japhé Nogueira
        </p>
        <SocialMediaContainer>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={16} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <TbHexagonLetterJ size={20} />
          </a>
        </SocialMediaContainer>
      </FooterWrap>
    );
  }
}
export default Footer;
