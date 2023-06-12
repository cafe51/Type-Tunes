import React from 'react';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import genericProfile from '../../pictures/generic-profile.jpg';
import portrait from '../../pictures/image-border (copy) (1).png';
import { EditLink, PicturePortrait, ProfileImage, ProfilePicture, ProfileWrapper, UserInfo, UserInfoMainContainer } from '../../styles/ProfileStyles';

type ProfileState = {
  user: IdefaultUser | null,
}

class Profile extends React.Component<Record<string, never>, ProfileState> {
  state: ProfileState = {
    user: null,
  };

  async componentDidMount() {
    const usuario = await getUser() as IdefaultUser | null;
    this.setState({ user: usuario });
  }

  render() {
    const { user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <ProfileWrapper>
          <h1>Profile</h1>
          { !user
            ? <Loading />
            : 
            <UserInfoMainContainer>
              <ProfileImage>
                <PicturePortrait alt="User avatar portrait" src={portrait} />
                {
                  !user.image || user.image.length == 0
                    ? <ProfilePicture data-testid="profile-image" alt="User avatar" src={genericProfile} />
                    : <ProfilePicture data-testid="profile-image" alt="User avatar" src={user.image} />
                }
              </ProfileImage>
              <UserInfo>
                <h2>Nome</h2>
                <h2>{user.name}</h2>
              </UserInfo>
              <UserInfo>
                <h2>Email</h2>
                <h2>{user.email}</h2>
              </UserInfo>
              <UserInfo>
                <h2>Descrição</h2>
                <h2>{user.description}</h2>
              </UserInfo>
              <EditLink to="/profile/edit">Editar perfil</EditLink>
            </UserInfoMainContainer>
          }
        </ProfileWrapper>
      </div>
    );
  }
}

export default Profile;