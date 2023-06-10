import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface PositionProps {
  position: 'start' | 'center' | 'end';
}

const baseLinkStyle = css`
  color: yellow;
  text-decoration: none;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 10px 20px;
  position: fixed;
  background: radial-gradient(
      89.23% 1958.28% at 95.38% 49.55%,
      #56008D 2.32%,
      #350B53 16.93%,
      #221828 38.86%,
      #1F1523 63.89%,
      #24162D 72.69%,
      #25162E 81.14%
    );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  z-index: 99;

  color: white;
  width: 100%;
  box-sizing: border-box;

  a {
    ${baseLinkStyle}
  }
`;


export const HeaderSection = styled.div<PositionProps>`
  display: flex;
  justify-content: ${(props: PositionProps) => (props.position)};
  align-items: center;
  flex: 1;
`;

export const HeaderLogo = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 120%;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px #C881F8;
`;

export const UserName = styled(Link)`
  ${baseLinkStyle}
  cursor: pointer;
  width: 50px;
`;

// export const NavMenu = styled.nav`
//   display: none;
//   position: absolute;
//   right: 0;
//   top: 60px;
//   width: 200px;
//   background: pink;
// `;

export const NavLink = styled(Link)`
  ${baseLinkStyle}
  display: block;
  padding: 10px;
  text-align: center
`;

const baseHamburgerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


/* export const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`; */


export const NavLinksDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const NavMenuMobile = styled.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;
  width: 200px;
  background: pink;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerMobile = styled.div`
  ${baseHamburgerStyle}

  @media (min-width: 768px) {
    display: none;
  }
`;
