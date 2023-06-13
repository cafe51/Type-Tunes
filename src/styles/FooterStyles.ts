import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  width: 100%;
  padding: 0px 30px 10px 20px;
  background: radial-gradient(
      89.23% 1958.28% at 95.38% 49.55%,
      #56008D 2.32%,
      #350B53 16.93%,
      #221828 38.86%,
      #1F1523 63.89%,
      #24162D 72.69%,
      #25162E 81.14%
    );
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.8);

  p {
    margin: 8px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;