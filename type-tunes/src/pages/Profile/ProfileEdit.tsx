import React from 'react';
import { Navigate } from 'react-router-dom';
import { updateUser, getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import { ProfileEditState } from '../../types';

class ProfileEdit extends React.Component {
  state: ProfileEditState = {
    loading: true,
    disabledButton: true,
    user: {
      name: '',
      email: '',
      image: '',
      description: '',
    },
    redirect: false,
  };

  formValidator = (formData: IdefaultUser) => {
    const values = [formData.description, formData.email, formData.name, formData.image];
    const isEmailValid = formData.email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) : false;
    const isAllValuesDefined = values.every((value) => value && value.length > 0);
    return isAllValuesDefined && isEmailValid;
  };

  async componentDidMount() {
    const userSavedData = await getUser() as IdefaultUser;
    if (userSavedData) {
      this.setState({ loading: true }, () => {
        this.setState({
          loading: false,
          user: { ...userSavedData },
          disabledButton: !this.formValidator(userSavedData),
        });
      });
    } else this.setState({ loading: false });
  }

  handleChange = ({ target }: {target: { name: string, value: string }}) => {
    const { name, value } = target;
    this.setState({
      user: {
        ...this.state.user, [name]: value
      },
    }, () => {
      this.setState({
        disabledButton: !this.formValidator(this.state.user),
      });
    });
  };

  handleClick = () => {
    this.setState({ loading: true },
      async () => {
        await updateUser(this.state.user);
        this.setState({ loading: false, redirect: true });
      });
  };

  render() {
    const {
      user: { description, email, name, image },
      disabledButton,
      loading,
      redirect
    } = this.state;
    const formulario = loading ? <Loading /> : (
      <form>
        <div>
          <h3>Foto</h3>
          <img alt="imagem" src={ image } />
          <label htmlFor="img">
            {' '}
            Escolha uma imagem que não necessariamente
            represente a sua imagem na realidade.
            <input
              name="image"
              data-testid="edit-input-image"
              type="text"
              id="img"
              value={ image }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <h3>Nome</h3>
          <label htmlFor="name">
            {' '}
            Fique a vontade para usar o nome que você quiser
            <input
              value={ name }
              data-testid="edit-input-name"
              type="text"
              id="name"
              onChange={ this.handleChange }
              name="name"
            />
          </label>
        </div>
        <div>
          <h3>Email</h3>
          <label htmlFor="email">
            {' '}
            Escolha seu email mais bonito
            <input
              value={ email }
              data-testid="edit-input-email"
              type="text"
              id="email"
              onChange={ this.handleChange }
              name="email"
            />
          </label>
        </div>
        <div>
          <h3>Descrição</h3>
          <label htmlFor="description">
            {' '}
            Descreva-se da forma como você quiser
            <textarea
              value={ description }
              data-testid="edit-input-description"
              id="description"
              onChange={ this.handleChange }
              name="description"
            />
          </label>
        </div>
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ disabledButton }
          onClick={ this.handleClick }
        >
          Editar perfil
        </button>
      </form>
    );
    return (
      <div data-testid="page-profile-edit">
        <Header />
        ProfileEdit
        {formulario}
        { redirect ? <Navigate to="/profile" /> : '' }
      </div>
    );
  }
}

export default ProfileEdit;
