import styled from 'styled-components';
import backgroundSerchScreen from '../images/searchBackground.png';

export const SearchWrapperMain = styled.section`
  height: 100%;

  @media (min-width: 768px) {
  }
`;

export const SearchWrapper = styled.div`
  padding-top: 100px;
  height: 100%;
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const SearchFormWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #54008B 20.29%,
        #7F11B0 50.42%,
        #25162E 95.83%
        );
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;

  @media (min-width: 768px) {
    position: fixed;
    width: fit-content;
    justify-content: center;
    height: 450px;
    
  }
`;


export const InputWrapper = styled.div`
  width: 80%;
  margin-bottom: 20px;
`;


export const SearchSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: 768px) {
    
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const BackGroundImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${backgroundSerchScreen});
  background-repeat: no-repeat;
  background-size: 120%;
  border-top: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;

  @media (min-width: 768px) {
    width: 90%;
    height: 90%;
    background-size: cover;
  }
`;

export const BackGroundImageOnlyMobile = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${backgroundSerchScreen});
  background-repeat: no-repeat;
  background-size: 120%;
  border-top: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;

  @media (min-width: 768px) {
    width: 90%;
  }
`;
