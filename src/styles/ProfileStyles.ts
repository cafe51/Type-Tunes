import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const UserFormMainContainer = styled.form`
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
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* gap: 10px; */
  border-radius: 10px;
  box-shadow: 2px 2px 8px #C881F8;
  margin-bottom: 40px;
  padding-bottom: 40px;
  width: 80%;
  height: auto;
  margin-top: 20px;
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  label {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 80%;
  }

  input, textarea {
    margin-top: 16px;
  }
`;

// export const EditLink = styled(Link)`
//   padding: 10px 20px;
//   background-color: #C881F8;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
// `;
