import styled from 'styled-components';
import backgroundSerchScreen from '../images/searchBackground.png';

export const SearchWrapperMain = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    /* margin: 30%; */
    /* background-color: green; */
    /* padding-top: -100px; */
    /* width: 40%; */
  }
`;

export const SearchWrapper = styled.div`
  padding-top: 100px;
  height: 100%;
  @media (min-width: 768px) {
    /* margin: 30%; */
    /* background-color: green; */
    padding-top: 50px;
    /* width: 40%; */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;

  @media (min-width: 768px) {
    /* margin: 30%; */
    width: 40%;
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

