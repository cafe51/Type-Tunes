import React from 'react';
import LoginHeader from './LoginHeader';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { createUser } from '../../services/userAPI';
import { InsertEventInterface } from '../../interfaces';
import { LoginStateType } from '../../types';
import { BackGroundImageLogin, LoginWrapper, ProfileWrapper, UserFormMainContainer } from '../../styles/LoginStyles';


class Login extends React.Component {
  state: LoginStateType = {
    name: '',
    disabled: true,
    isLoading: false,
    redirect: false,
  };

  handleChange = ({ target }: InsertEventInterface ) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
      disabled: !(target.value.length >= 3)
    });
  };

  handleClick = () => {
    const name = { name: this.state.name };
    this.setState({ isLoading: true },
      async () => {
        await createUser(name);
        this.setState({ isLoading: false, redirect: true });
      });
  };

  render() {
    const { disabled, isLoading, redirect, name } = this.state;
    return (
      <LoginWrapper>
        <LoginHeader/>
        <ProfileWrapper data-testid="page-login">
          <BackGroundImageLogin />
          <UserFormMainContainer>

            <label htmlFor="nome">
              <input
                data-testid="login-name-input"
                placeholder='Seu Nome'
                value={ name }
                name="name"
                type="text"
                id="name"
                onChange={ this.handleChange }
              />
              <button
                data-testid="login-submit-button"
                type="button"
                disabled={ disabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
              {isLoading ? <Loading /> : ''}
              {redirect ? <Navigate to="/search" /> : ''}
            </label>

          </UserFormMainContainer>
        </ProfileWrapper>
      </LoginWrapper>
    );
  }
}

export default Login;
