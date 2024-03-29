import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import { headerStateType } from '../types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HamburgerMobile, HeaderLogo, HeaderSection, HeaderWrapper, NavLink, NavLinksDesktop, NavMenuMobile, UserName } from '../styles/HeaderStyles';


interface HeaderState extends headerStateType {
  isMenuOpen: boolean;
}

class Header extends React.Component<Record<string, never>, HeaderState> {
  state: HeaderState = {
    user: null,
    loading: false,
    isMenuOpen: false,
  };

  menuRef: React.RefObject<HTMLDivElement> = React.createRef();


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

  handleClickOutside = (event: any) => {
    if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
      this.setState({ isMenuOpen: false });
      document.removeEventListener('click', this.handleClickOutside);
      document.removeEventListener('touchmove', this.handleClickOutside);

    }
  };

  handleMenuClick = () => {
    if (this.state.isMenuOpen) {
      document.removeEventListener('click', this.handleClickOutside);
      document.removeEventListener('touchmove', this.handleClickOutside);

    }
    
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }), () => {
      if (this.state.isMenuOpen) {
        setTimeout(() => {
          document.addEventListener('click', this.handleClickOutside);
          document.addEventListener('touchmove', this.handleClickOutside);

        }, 0);
      }
    });
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
        <div>
          <HeaderLogo>TYPE TUNES</HeaderLogo>
        </div>
        <HeaderSection position='end'>
          <HamburgerMobile onClick={this.handleMenuClick}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </HamburgerMobile>
          <NavLinksDesktop>
            <NavLink data-testid="link-to-search" to="/search">
            Pesquisar
            </NavLink>
            <NavLink data-testid="link-to-favorites" to="/favorites">
            Favoritas
            </NavLink>
            <NavLink data-testid="link-to-profile" to="/profile">
            Perfil
            </NavLink>
          </NavLinksDesktop>
        </HeaderSection>
        <NavMenuMobile open={isMenuOpen} ref={this.menuRef}>
          <NavLink to="/search">
            Pesquisar
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
