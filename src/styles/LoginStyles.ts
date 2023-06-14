import styled, { css } from 'styled-components';
import LoginBackgroundDeskTop from '../images/LoginBackgroundDeskTop.png';
import backgroundImage from '../images/background-login.png';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
`;

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const ProfileWrapper = styled.div`
  ${flexCenterColumn}
  /* margin-top: 20px; */
  padding: 100px 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* border: 1px solid white; */

  background-image: url(${backgroundImage});
  background-position-y: 60px;
  background-position-x: -20px;
  background-repeat: no-repeat;
  background-size: 120%;

  @media (min-width: 768px) {
    margin-top: 0px;
    padding: 0px;
    flex-direction: row;
    background-image: url(${LoginBackgroundDeskTop});
    background-repeat: no-repeat;
    background-size: cover;

  }
`;

export const UserFormMainContainer = styled.form`
  ${flexCenterColumn}
  padding-bottom: 200px;
  text-align: center;
  width: 90%;

  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  label {
    ${flexCenterColumn}
    justify-content: space-around;
    height: 100%;
    gap: 16px;
    width: 80%;
  }

  input, textarea {
    margin-top: 16px;
  }

  button {
      width: 100%;
    }

  @media (min-width: 768px) {
    flex: auto;
    margin-top: 0px;
    padding: 0px;
    width: 60%;

    label {
      ${flexCenterColumn}
      justify-content: center;
      height: 100%;

    }


  }
`;

export const BackGroundImageLogin = styled.div`
  height: 100%;
  width: 70%;

  @media (max-width: 768px) {
  }
`;