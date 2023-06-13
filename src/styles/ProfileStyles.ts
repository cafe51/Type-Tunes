import styled, { css } from 'styled-components';
import backgroundProfile from '../images/violino.png';

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  ${flexCenterColumn}
  padding-top: 100px;
  width: 100%;
  height: fit-content;
  background-image: url(${backgroundProfile});
  background-repeat: no-repeat;
  /* background-size: 230%; */
  /* background-position-y: 80px; */
  /* background-position-x: -150px; */
  background-size: 330%;
  background-position-y: 80px;
  background-position-x: -350px;
`;

export const PicturePortrait = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;
`;

export const ProfileImage = styled.div`
  ${flexCenterColumn}
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

const styledContainer = css`
  ${flexCenterColumn}
  padding-bottom: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 80%;
  /* box-shadow: 2px 2px 8px #C881F8; */

  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
`;

export const UserInfoMainContainer = styled.div`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  ${styledContainer}
  
  /* background-color: green; */

`;


export const UserFormMainContainer = styled.form`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  ${styledContainer}
`;


export const UserInfo = styled.div`
  height: auto;
  border-radius: 10px;
  background: rgba(200, 129, 248, 0.9);
  ${styledContainer}

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input, textarea {
    margin-top: 16px;
    background: white;
    color: #82488D;
    border-radius: 8px;
    &:focus {
      background: #82488D;
      outline-style: solid;
      outline-width: 2px;
      outline-color: #B250B0;
      color: white;

    }
    &::placeholder {
      font-size: 16px;
      color: #82488D;
  }
  }
`;
