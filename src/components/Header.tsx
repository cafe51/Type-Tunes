import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
// import logo from '../images/logo.png';
import { headerStateType } from '../types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface PositionProps {
  position: 'start' | 'center' | 'end';
}

const HeaderWrapper = styled.header`
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

  color: white;
  width: 100%;
  box-sizing: border-box;

  a {
    color: yellow;
    text-decoration: none;
  }

`;

const HeaderSection = styled.div<PositionProps>`
  display: flex;
  justify-content: ${(props: PositionProps) => (props.position)};
  align-items: center;
  flex: 1;
`;

const HeaderSectionLogo = styled.div<PositionProps>`
  /* display: flex;
  justify-content: ${(props: PositionProps) => (props.position)};
  align-items: center;
  flex: 1; */
`;

const HeaderLogo = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 120%;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px #C881F8;
`;

const UserName = styled(Link)`
  cursor: pointer;
  width: 50px;
`;

const NavMenu = styled.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;
  width: 200px;
  background: pink;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px;
  text-align: center
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const NavLinksDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const NavMenuMobile = styled(NavMenu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerMobile = styled(Hamburger)`
  @media (min-width: 768px) {
    display: none;
  }
`;

interface HeaderState extends headerStateType {
  isMenuOpen: boolean;
}

class Header extends React.Component<any, HeaderState> {
  state: HeaderState = {
    user: null,
    loading: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    this.setState({ loading: true },
      async () => {
        const user: any = await getUser();
        this.setState({
          loading: false,
          user,
        });
      });
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {

    const { user, loading, isMenuOpen } = this.state;

    const saudação = (
      loading
        ? <Loading />
        : (
          <UserName data-testid="header-user-name" to="/profile">
            { user ? user.name : 'Usuário não encontrado' }
          </UserName>
        ));

    return (
      <HeaderWrapper data-testid="header-component">
        <HeaderSection position='start'>
          {saudação}
        </HeaderSection>
        <HeaderSectionLogo position='center'>
          <HeaderLogo>TYPE TUNES</HeaderLogo>
        </HeaderSectionLogo>
        <HeaderSection position='end'>
          <HamburgerMobile onClick={this.handleMenuClick}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </HamburgerMobile>
          <NavLinksDesktop>
            <NavLink data-testid="link-to-search" to="/search">
            Search
            </NavLink>
            <NavLink data-testid="link-to-favorites" to="/favorites">
            Favoritas
            </NavLink>
            <NavLink data-testid="link-to-profile" to="/profile">
            Perfil
            </NavLink>
          </NavLinksDesktop>
        </HeaderSection>
        <NavMenuMobile style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <NavLink to="/search">
          Search
          </NavLink>
          <NavLink to="/favorites">
          Favoritas
          </NavLink>
          <NavLink to="/profile">
          Perfil
          </NavLink>
        </NavMenuMobile>
      </HeaderWrapper>
    );
  }
}

export default Header;
