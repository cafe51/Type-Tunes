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
    margin: auto;
    padding-top: 70px;
    height: 100%;
    background-image: none;
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
    height: 100%;
    background: linear-gradient(
    90deg,
    #25162E 20.29%,
    #7F11B0 50.42%,
    #54008B 95.83%
    );
  }




`;

export const ProfileImage = styled.div`
  ${flexCenterColumn}

  @media (min-width: 768px) {
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
    justify-content: space-around;
    align-items: start;
    height: 100%;
    margin-top: 32px;
  }
`;

export const DescriptionAndButtonContainer = styled.div`
  ${flexCenterColumn}
  width: 100%;
    @media (min-width: 768px) {
    justify-content: start;
    /* align-items: start; */
    height: 100%;
    padding-bottom: 16px;
  }
`;


const styledContainer = css`
  ${flexCenterColumn}
  padding-bottom: 40px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80%;


  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {

  }
`;

export const UserInfoMainContainer = styled.div`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  ${styledContainer}

  @media (min-width: 768px) {
    padding: 0px;
    margin: 0px;
    flex-direction: row;
    height: 100%;


      
    border-radius: 0px;
  }
`;



export const UserFormMainContainer = styled.form`
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  width: 100%;
  ${styledContainer}

  @media (min-width: 768px) {
    padding: 0px;
    margin: 0px;
    flex-direction: row;
    height: 100%;
    border-radius: 0px;
  }
`;

export const UseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    height: 100%;
    padding-bottom: 10px;
    justify-content: space-between;
    background: linear-gradient(
      90deg,
      #54008B 95.83%,
      #7F11B0 50.42%,
      #54008B 95.83%
      );
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
    background: rgba(200, 129, 248, 0.3);
    box-shadow: 2px 2px 8px #C881F8;
    width: 45%;
    border-radius: 20px;
    justify-content: space-between;
    align-items: center;

    /* min-height: 200px; */
    height: 50%;
    h2 {
      margin-bottom: 0px;
      font-size: 16px;
    }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
    }

    /* label {
      margin-top: 5px;
    } */
  }
`;

export const UserInfoWithInput = styled.div`
  height: 100%;
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
    padding-bottom: 10px;
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
    background: rgba(200, 129, 248, 0.3);
    box-shadow: 2px 2px 8px #C881F8;
    padding: 0px;
    /* padding-bottom: 20px; */
    overflow: hidden;
    width: 45%;
    border-radius: 20px;
    justify-content: start;
    align-items: center;

    /* gap: 10px; */
    height: 90%;
    h2 {
      margin-bottom: 0px;
      font-size: 16px;
    }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
      font-size: 12px;
    }

    label {
      width: 95%;
      justify-content: start;
      min-height: 80%;
      /* padding-bottom: 20px; */
    }

    input, textarea {
        font-size: 12px;
        height: 30px;
        overflow: hidden;
        align-self: end;
      }
  }
`;

export const UserInfoImageWithInput = styled.div`
  height: 100%;
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
    padding-bottom: 10px;
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
    background: rgba(200, 129, 248, 0.3);
    box-shadow: 2px 2px 8px #C881F8;
    padding: 0px;
    overflow: hidden;
    width: 45%;
    border-radius: 20px;
    justify-content: start;
    align-items: center;
    height: max-content;
    /* background-color: blue; */
    padding-bottom: 20px;
    margin-bottom: 10px;
    h2 {
      margin-bottom: 0px;
      font-size: 16px;
    }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
      font-size: 12px;
    }

    label {
      width: 95%;
      justify-content: start;
      min-height: 100%;
    }

    input, textarea {
        font-size: 12px;
        height: 30px;
        overflow: hidden;
        align-self: end;
      }
}
`;


export const Input = styled.div`
    @media (min-width: 768px) {
      /* background-color: green; */
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
    background: rgba(200, 129, 248, 0.3);
    box-shadow: 2px 2px 8px #C881F8;
    border-radius: 20px;
    gap: 10px;
    justify-content: start;
    align-items: center;
    height: fit-content;
    h2 {
    margin-bottom: 0px;
    font-size: 16px;
  }
    p {
      margin-bottom: 0px;
      word-wrap: break-word;
      font-size: 12px;
    }

    label {
      width: 95%;
      justify-content: start;
      min-height: 100%;
    }

    textarea {
        font-size: 12px;
        height: 100px;
        overflow: hidden;
        align-self: end;
      }
  }

`;

export const UserDescriptionFormInfo = styled.div`
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
    background: rgba(200, 129, 248, 0.3);
    box-shadow: 2px 2px 8px #C881F8;
    border-radius: 20px;
    gap: 10px;
    padding: 0px;
    justify-content: start;
    align-items: center;
    height: fit-content;
    h2 {
    margin-bottom: 0px;
    font-size: 16px;
    /* overflow: hidden; */
  }
    p {
      margin: 0px;
      word-wrap: break-word;
      font-size: 12px;
    }

    label {
      width: 95%;
      justify-content: start;
      min-height: 100%;
      /* background-color: yellow; */
      padding-bottom: 20px;
    }

    textarea {
        font-size: 12px;
        height: 90px;
        overflow: hidden;
        align-self: end;
      }
  }

`;

export const Title = styled.div`
  ${flexCenterColumn}
  background-color: #521C74;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  padding: 4px 0px;

  h2 {
    margin: auto;
    font-weight: bolder;
  }

  @media (min-width: 768px) {
    /* width: 80%; */
  }
`;
