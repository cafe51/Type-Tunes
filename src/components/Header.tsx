import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import logo from '../images/logo.png';
import { headerStateType } from '../types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface PositionProps {
  position: 'start' | 'center' | 'end';
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 10px 20px;
`;

const HeaderSection = styled.div<PositionProps>`
  display: flex;
  justify-content: ${(props: PositionProps) => (props.position)};
  align-items: center;
  flex: 1;
`;

const HeaderLogo = styled.img`
  width: 100px;
`;

const UserName = styled(Link)`
  cursor: pointer;
  width: 100px;
`;

const NavMenu = styled.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;
  width: 200px;
  height: 100%;
  background: #f0f0f0;
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
        <HeaderSection position='center'>
          <HeaderLogo alt="logo" src={logo} />
        </HeaderSection>
        <HeaderSection position='end'>
          <Hamburger onClick={this.handleMenuClick}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Hamburger>
        </HeaderSection>
        <NavMenu style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <NavLink data-testid="link-to-search" to="/search">
            Search
          </NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">
            Favoritas
          </NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">
            Perfil
          </NavLink>
        </NavMenu>
      </HeaderWrapper>
    );
  }
}

export default Header;
