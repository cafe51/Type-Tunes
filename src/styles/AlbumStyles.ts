import styled, { css } from 'styled-components';

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AlbumWrapperMain = styled.section`
  height: 100%;
`;

export const AlbumWrapper = styled.div`
  ${flexCenterColumn}
  padding-top: 100px;
  width: 99%;

  h1 {
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const AlbumCardWithTitleWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* text-align: center; */
    /* background-color: blue; */
    width: 100%;
    height: 100%;
    /* padding-bottom: 50px; */
  /* margin: 30%; */
  /* width: 40%; */
  /* background-color: yellow; */
  }
`;

export const AlbumCardWithTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    top: 8px;
    position: fixed;
    width: fit-content;
    height: 300px;
  }

`;


export const AlbumCardsListWrapper = styled.div`
  ${flexCenterColumn}
  width: 100%;
  justify-content: space-around;

  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
    text-shadow: 0px 4px 4px #000000;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    padding-top: 20px;
    /* width: 50%; */
    /* height: 100%; */
    /* margin: 30%; */
    /* width: 40%; */
    /* background-color: yellow; */
    background: linear-gradient(
      90deg,
      rgba(84, 0, 139, 0.9) 20.29%,
      rgba(127, 17, 176, 0.9) 50.42%,
      rgba(37, 22, 46, 0.9) 95.83%
    );

  }
`;

export const SearchResultsWrapper = styled.div`
  ${flexCenterColumn}
  width: 99%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;



export const AlbumCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  @media (min-width: 768px) {
    /* background-color: blue; */
    justify-content: space-between;
    width: 30%;
    min-height: 400px;
    /* max-height: ; */
    /* height: 340px; */
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const AlbumCardWrapperMusicList = styled.div`
  display: flex;
  flex-direction: column;
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

  @media (min-width: 768px) {
    justify-content: space-between;
    /* position: fixed;
    width: fit-content; */
    height: 500px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px;
  }
`;

