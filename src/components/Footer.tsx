import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbHexagonLetterJ } from 'react-icons/tb';
import { FooterWrap, SocialMediaContainer } from '../styles/FooterStyles';


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
