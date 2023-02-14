import React from 'react';
import { Navigate } from 'react-router-dom';
// import Loading from './Loading';
import { createUser } from '../services/userAPI';

type insertNameEventType = {
  target: {
    name: string;
    type: string;
    checked: boolean;
    value: string 
  }
}

class Login extends React.Component {
  state = {
    name: '',
    disabled: true,
    loading: false,
    redirect: false,
  };

  handleChange = ({ target }: insertNameEventType ) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
      disabled: !(target.value.length >= 3)
    });
  };

  handleClick = () => {
    const name = { name: this.state.name };
    this.setState({ loading: true },
      async () => {
        await createUser(name);
        this.setState({ loading: false, redirect: true });
      });
  };

  render() {
    const { disabled, loading, redirect, name } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="nome">
            Nome
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
            {loading === true ? <div>Carregando...</div> : ''}
            {redirect === true ? <Navigate to="/search" /> : ''}
          </label>

        </form>
      </div>
    );
  }
}

export default Login;
