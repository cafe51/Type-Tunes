import React from 'react';
import LoginHeader from './LoginHeader';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { createUser } from '../../services/userAPI';
import { InsertEventInterface } from '../../interfaces';
import { LoginStateType } from '../../types';
import styled, { css } from 'styled-components';
import backgroundImage from '../../images/background-login.png';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
`;

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  ${flexCenterColumn}
  margin-top: 20px;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-image: url(${backgroundImage});
  background-position-y: 60px;
  background-position-x: -20px;
  background-repeat: no-repeat;
  background-size: 120%;
`;

export const UserFormMainContainer = styled.form`
  ${flexCenterColumn}
  flex: 1 0 auto;
  padding-bottom: 40px;
  text-align: center;
  margin-bottom: -100px;
  width: 90%;

  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  label {
    ${flexCenterColumn}
    justify-content: space-around;
    height: 100%;
    gap: 16px;
    width: 80%;
  }

  input, textarea {
    margin-top: 16px;
  }
`;


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
