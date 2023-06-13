import styled, { css } from 'styled-components';
import backgroundProfile from '../images/violino.png';

export const ProfileWrapperMain = styled.section`
  height: 100%;
`;

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
  background-size: 330%;
  background-position-y: 80px;
  background-position-x: -350px;
  @media (min-width: 768px) {
    padding-top: 80px;
    height: 100%;
    background-image: none;
    /* flex-direction: row; */
    /* margin: 30%; */
    /* background-color: green; */
    /* padding-top: -100px; */
    /* width: 40%; */
  }
`;

export const PicturePortrait = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;

  @media (min-width: 768px) {
    width: 50%;
  }
`;


export const ProfileImageContainer = styled.div`
  ${flexCenterColumn}

  @media (min-width: 768px) {
    background-color: blue;
    height: 100%;
  }
`;

export const ProfileImage = styled.div`
  ${flexCenterColumn}

  @media (min-width: 768px) {
    background-color: yellow;
  }
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const NameAndEmailContainer = styled.div`
  ${flexCenterColumn}
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    /* justify-itens: center; */
    /* align-items: baseline; */
    height: 100%;
    background-color: green;
  }
`;

export const DescriptionAndButtonContainer = styled.div`
  ${flexCenterColumn}
  width: 100%;
    @media (min-width: 768px) {
    /* justify-itens: center; */
    /* align-items: baseline; */
    height: 100%;
    /* background-color: green; */
  }
`;


const styledContainer = css`
  ${flexCenterColumn}
  padding-bottom: 40px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80%;
  /* box-shadow: 2px 2px 8px #C881F8; */

  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    /* flex-direction: row; */
    /* margin: 30%; */
    /* background-color: green; */
    /* padding-top: -100px; */
    /* width: 40%; */
  }
`;

export const UserInfoMainContainer = styled.div`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  ${styledContainer}
  
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    background-color: green;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    /* margin: 30%; */
    /* background-color: green; */
    /* padding-top: -100px; */
    /* width: 40%; */
  }

`;


export const UserFormMainContainer = styled.form`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  width: 100%;
  ${styledContainer}
`;

export const UseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
  width: 100%;
  @media (min-width: 768px) {
    height: 100%;
    background-color: red;
    /* flex-direction: row; */
    /* margin: 30%; */
    /* background-color: green; */
    /* padding-top: -100px; */
    /* width: 40%; */
  }

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
  @media (min-width: 768px) {
    justify-content: start;
    align-items: center;
    height: 50%;
    h2 {
    margin-bottom: 0px;
    font-size: 16px;
  }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
    }
  }
`;

export const UserDescriptionInfo = styled.div`
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
  @media (min-width: 768px) {
    justify-content: start;
    align-items: center;
    height: 50%;
    h2 {
    margin-bottom: 0px;
    font-size: 16px;
  }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
    }
  }

`;

export const Title = styled.div`
  ${flexCenterColumn}
  background-color: blue;
  width: 100%;
  padding: 4px 0px;

  h2 {
    margin: auto;
  }
`;
