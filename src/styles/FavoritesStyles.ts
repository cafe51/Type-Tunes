import styled from 'styled-components';
import backgroundFavorites from '../images/background-favorites.png';

export const FavoriteMainWrapper = styled.div`
  height: 100%;
`;

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 99%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const TitleAndBackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleAndBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {

    width: fit-content;
    /* height: 600px; */
    position: fixed;
  }
`;

export const Title = styled.div`

`;

export const BackgroundImageFavorites = styled.div`
  background-image: url(${backgroundFavorites});
  background-size: cover;
  box-shadow: 2px 2px 8px black;

  width: 100%;
  height: 200px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`;
