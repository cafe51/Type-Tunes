import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { IdefaultUser } from '../../interfaces';
import styled from 'styled-components';


const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  word-wrap: break-word;
`;

type ProfileState = {
  user: IdefaultUser | null,
}

class Profile extends React.Component {
  state: ProfileState = {
    user: null,
  };

  async componentDidMount() {
    const usuario = await getUser();
    this.setState({ user: usuario });
  }

  render() {
    const { user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <ProfileWrapper>
        Profile
          { !user
            ? <Loading />
            : 
            <div>
              <div>
                <img data-testid="profile-image" alt="" src={ user.image } />
              </div>
              <div>
                <h1>Nome</h1>
                <p>{user.name}</p>
              </div>
              <div>
                <h1>Email</h1>
                <p>{user.email}</p>
              </div>
              <div>
                <h1>Descrição</h1>
                <p>{user.description}</p>
              </div>
              <Link to="/profile/edit">
          Editar perfil
              </Link>
            </div>
          }
        </ProfileWrapper>
      </div>
    );
  }
}

export default Profile;
