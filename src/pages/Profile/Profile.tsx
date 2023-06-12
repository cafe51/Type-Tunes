import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import styled from 'styled-components';
import genericProfile from '../../pictures/generic-profile.jpg';
import portrait from '../../pictures/image-border (copy) (1).png';


export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
`;

export const PicturePortrait = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const UserInfoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  box-shadow: 2px 2px 8px #C881F8;
  
  margin-bottom: 40px;
  width: 80%;

  margin-top: 20px;
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
`;

export const UserInfo = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 8px #C881F8;
  margin-bottom: 40px;
  /* padding-bottom: 40px; */
  width: 80%;
  height: 150px;

  margin-top: 20px;
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
`;

export const EditLink = styled(Link)`
  padding: 10px 20px;
  background-color: #C881F8;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;



// export const AlbumCardWrapper = styled.div`
//   border-radius: 10px;
//   box-shadow: 2px 2px 8px #C881F8;
//   margin-bottom: 40px;
//   width: 80%;

//   img {
//     border-bottom-left-radius: 20px;
//     border-bottom-right-radius: 20px;
//     box-shadow: 2px 2px 10px black;
//     width: 80%;
//   }

//   a {
//     text-decoration: none;
//   }
// `;

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
    // user ? console.log('USEEER', user.image) : '';
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

              {/* <Image data-testid="profile-image" alt="User avatar" src={user.image} /> */}
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