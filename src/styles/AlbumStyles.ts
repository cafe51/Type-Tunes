import styled, { css } from 'styled-components';

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AlbumWrapper = styled.div`
  ${flexCenterColumn}
  padding-top: 100px;
  width: 99%;

  h1 {
    margin-bottom: 30px;
  }
  
`;

export const AlbumCardsListWrapper = styled.div`
  ${flexCenterColumn}
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  justify-content: space-around;

  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
    text-shadow: 0px 4px 4px #000000;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    /* margin: 30%; */
    /* width: 40%; */
    /* background-color: yellow; */
  }
`;

export const SearchResultsWrapper = styled.div`
  ${flexCenterColumn}
  width: 99%;

  /* @media (min-width: 768px) {
    margin: 30%;
    width: 40%;
  } */
`;



export const AlbumCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 8px #C881F8;
  margin-bottom: 40px;
  width: 80%;

  img {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 2px 10px black;
    width: 80%;
  }

  a {
    text-decoration: none;
  }
`;