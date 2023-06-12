import React from 'react';
import LoginHeader from './LoginHeader';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { createUser } from '../../services/userAPI';
import { InsertEventInterface } from '../../interfaces';
import { LoginStateType } from '../../types';
import styled, { css } from 'styled-components';

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
  padding: 100px 0;
  width: 100%;
  background-color: yellow;
  height: 100%;
  overflow: auto;
`;


const styledContainer = css`
  ${flexCenterColumn}
  padding-bottom: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 90%;
  box-shadow: 2px 2px 8px #C881F8;

  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
`;

export const UserFormMainContainer = styled.form`
  ${styledContainer}
`;


export const UserInfo = styled.div`
  height: auto;
  border-radius: 10px;
  ${styledContainer}

  label {
    ${flexCenterColumn}
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
            <UserInfo>
              <label htmlFor="nome">
                <h2>Nome</h2>
                <input
                  data-testid="login-name-input"
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
            </UserInfo>
          </UserFormMainContainer>
        </ProfileWrapper>
      </LoginWrapper>
    );
  }
}

export default Login;
