import styled, { css } from 'styled-components';

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
  box-shadow: 2px 2px 8px #C881F8;

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

`;


export const UserFormMainContainer = styled.form`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  ${styledContainer}
`;


export const UserInfo = styled.div`
  height: auto;
  border-radius: 10px;
  ${styledContainer}

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input, textarea {
    margin-top: 16px;
  }
`;
