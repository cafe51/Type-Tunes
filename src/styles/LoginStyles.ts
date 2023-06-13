import styled, { css } from 'styled-components';
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
  margin-top: 20px;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-image: url(${backgroundImage});
  background-position-y: 60px;
  background-position-x: -20px;
  background-repeat: no-repeat;
  background-size: 120%;
`;

export const UserFormMainContainer = styled.form`
  ${flexCenterColumn}
  flex: 1 0 auto;
  padding-bottom: 40px;
  text-align: center;
  margin-bottom: -100px;
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
`;
