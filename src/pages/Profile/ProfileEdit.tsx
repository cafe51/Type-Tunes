import React from 'react';
import { Navigate } from 'react-router-dom';
import { updateUser, getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import { ProfileEditState } from '../../types';
import genericProfile from '../../pictures/generic-profile.jpg';
import portrait from '../../pictures/image-border (copy) (1).png';
import { PicturePortrait, ProfileImage, ProfilePicture, ProfileWrapper, UserFormMainContainer, UserInfo } from '../../styles/ProfileStyles';
import { Button, Input } from '../../styles/SearchStyles';

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

      <UserFormMainContainer>
        <ProfileImage>
          <PicturePortrait alt="User avatar portrait" src={portrait} />
          {
            !image || image.length == 0
              ? <ProfilePicture data-testid="profile-image" alt="User avatar" src={genericProfile} />
              : <ProfilePicture data-testid="profile-image" alt="User avatar" src={image} />
          }
        </ProfileImage>
        <UserInfo>
          <h2>Sua Foto</h2>
          <label htmlFor="img">
            Escolha uma imagem que não necessariamente
            represente a sua imagem na realidade.
            <Input
              name="image"
              data-testid="edit-input-image"
              type="text"
              id="img"
              value={ image }
              onChange={ this.handleChange }
            />
          </label>
        </UserInfo>
        <UserInfo>
          <h2>Nome</h2>
          <label htmlFor="name">
            Fique a vontade para usar o nome que você quiser
            <Input
              value={ name }
              data-testid="edit-input-name"
              type="text"
              id="name"
              onChange={ this.handleChange }
              name="name"
            />
          </label>
        </UserInfo>
        <UserInfo>
          <h2>Email</h2>
          <label htmlFor="email">
            {' '}
            Escolha seu email mais bonito
            <Input
              value={ email }
              data-testid="edit-input-email"
              type="text"
              id="email"
              onChange={ this.handleChange }
              name="email"
            />
          </label>
        </UserInfo>
        <UserInfo>
          <h2>Descrição</h2>
          <label htmlFor="description">
            Descreva-se da forma como você quiser
            <textarea
              value={ description }
              data-testid="edit-input-description"
              id="description"
              onChange={ this.handleChange }
              name="description"
            />
          </label>
        </UserInfo>
        <Button
          data-testid="edit-button-save"
          type="button"
          disabled={ disabledButton }
          onClick={ this.handleClick }
        >
          Editar perfil
        </Button>
      </UserFormMainContainer>
    );
    return (
      <section>
        <Header />
        <ProfileWrapper data-testid="page-profile-edit">
          <h1>ProfileEdit</h1>
          {formulario}
          { redirect ? <Navigate to="/profile" /> : '' }
        </ProfileWrapper>
      </section>
    );
  }
}

export default ProfileEdit;
