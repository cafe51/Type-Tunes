import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import logo from '../images/logo.png';
import { IdefaultUser } from '../interfaces';

type headerStateType = {
  user: IdefaultUser | null;
  loading: boolean;
}

class Header extends React.Component {
  state: headerStateType = {
    user: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true },
      async () => {
        const user = await getUser();
        this.setState({
          loading: false,
          user,
        });
      });
  }

  render() {
    const { user, loading } = this.state;

    const saudação = (
      loading
        ? <Loading />
        : (
          <div data-testid="header-user-name">
            { user ? user.name : 'Usuário não encontrado' }
          </div>
        ));

    return (
      <header data-testid="header-component">
        <div>
          <img alt="logo" src={ logo } style={ { width: '100px' } }/>
        </div>
        {saudação}
        <nav>
          <Link data-testid="link-to-search" to="/search">
            <div>
              Search
            </div>
          </Link>
          <Link data-testid="link-to-favorites" to="/favorites">
            <div>
              Favoritas
            </div>
          </Link>
          <Link data-testid="link-to-profile" to="/profile">
            <div>
              Perfil
            </div>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
