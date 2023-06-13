import React from 'react';
import { Navigate } from 'react-router-dom';
import { updateUser, getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import { ProfileEditState } from '../../types';
import genericProfile from '../../pictures/generic-profile.jpg';
import portrait from '../../pictures/image-border (copy) (1).png';
import { PicturePortrait, ProfileImage, ProfilePicture, ProfileWrapper, UserFormMainContainer, UserInfoWithInput, Title, NameAndEmailContainer, DescriptionAndButtonContainer, ProfileWrapperMain, ProfileImageContainer, UseInfoContainer, UserDescriptionInfo, Input, UserInfoImageWithInput, UserDescriptionFormInfo } from '../../styles/ProfileStyles';

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
    return (
      <ProfileWrapperMain data-testid="page-profile-edit">
        <Header />
        <ProfileWrapper >
          { loading
            ? <Loading />
            :
            <UserFormMainContainer>
              <ProfileImageContainer>
                <ProfileImage>
                  <PicturePortrait alt="User avatar portrait" src={portrait} />
                  {
                    !image || image.length == 0
                      ? <ProfilePicture data-testid="profile-image" alt="User avatar" src={genericProfile} />
                      : <ProfilePicture data-testid="profile-image" alt="User avatar" src={image} />
                  }
                </ProfileImage>
                <UserInfoImageWithInput>
                  <Title><h2>Sua Foto</h2></Title>
                  <label htmlFor="img">
                    <p>Escolha uma imagem que não necessariamente
                    represente a sua imagem na realidade.</p>
                    <Input>
                      <input
                        name="image"
                        data-testid="edit-input-image"
                        type="text"
                        id="img"
                        value={ image }
                        onChange={ this.handleChange }
                      />
                    </Input>
                  </label>
                </UserInfoImageWithInput>
              </ProfileImageContainer>
        
              <UseInfoContainer>    
                <NameAndEmailContainer>
                  <UserInfoWithInput>
                    <Title><h2>Nome</h2></Title>
                    <label htmlFor="name">
                      <p>Escolha um nome para você</p>
                      <Input>
                        <input
                          value={ name }
                          data-testid="edit-input-name"
                          type="text"
                          id="name"
                          onChange={ this.handleChange }
                          name="name"
                        />
                      </Input>
                    </label>
                  </UserInfoWithInput>
                  <UserInfoWithInput>
                    <Title><h2>Email</h2></Title>
                    <label htmlFor="email">
                      <p>Escolha seu email mais bonito</p>
                      <Input>
                        <input
                          value={ email }
                          data-testid="edit-input-email"
                          type="text"
                          id="email"
                          onChange={ this.handleChange }
                          name="email"
                        />
                      </Input>
                    </label>
                  </UserInfoWithInput>
                </NameAndEmailContainer>
                <DescriptionAndButtonContainer>
                  <UserDescriptionFormInfo>
                    <Title><h2>Descrição</h2></Title>
                    <label htmlFor="description">
                      <p>Descreva-se da forma como você quiser</p>
                      <textarea
                        value={ description }
                        data-testid="edit-input-description"
                        id="description"
                        onChange={ this.handleChange }
                        name="description"
                      />
                    </label>
                  </UserDescriptionFormInfo>
                  <button
                    data-testid="edit-button-save"
                    type="button"
                    disabled={ disabledButton }
                    onClick={ this.handleClick }
                  >
            Editar perfil
                  </button>
                </DescriptionAndButtonContainer>
              </UseInfoContainer>
            </UserFormMainContainer>
          }
          { redirect ? <Navigate to="/profile" /> : '' }
        </ProfileWrapper>
      </ProfileWrapperMain>
    );
  }
}

export default ProfileEdit;

