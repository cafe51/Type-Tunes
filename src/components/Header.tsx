/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import logo from '../images/logo.png';
import { headerStateType } from '../types';
// import { IdefaultUser } from '../interfaces';

// Aqui criamos os componentes estilizados
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const HeaderLogo = styled.img`
  width: 100px;
`;

const UserName = styled.div`
  cursor: pointer;
`;

const NavMenu = styled.nav`
  display: none;
  position: absolute;
  left: 0;
  top: 60px;
  width: 200px;
  height: 100%;
  background: #f0f0f0;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px;
`;

interface HeaderState extends headerStateType {
  isMenuOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
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

  handleUserNameClick = () => {
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
          <UserName data-testid="header-user-name" onClick={this.handleUserNameClick}>
            { user ? user.name : 'Usuário não encontrado' }
          </UserName>
        ));

    return (
      <HeaderWrapper data-testid="header-component">
        {saudação}
        <HeaderLogo alt="logo" src={logo} />
        <NavLink data-testid="link-to-search" to="/search">
          Search
        </NavLink>
        <NavMenu style={{ display: isMenuOpen ? 'block' : 'none' }}>
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
