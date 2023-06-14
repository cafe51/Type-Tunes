import React from 'react';
import MusicCard from '../Album/MusicComponent';
import Loading from '../../components/Loading';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Header from '../../components/Header';
import { Isong } from '../../interfaces';
import styled from 'styled-components';

export const FavoriteMainWrapper = styled.div`

`;

export const FavoritesWrapper = styled.div`
  padding-top: 100px;
  width: 99%;
`;


class Favorites extends React.Component {
  state = {
    loading: true,
    favorites: [],
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      this.setState({ loading: false, favorites: await getFavoriteSongs() });
    });
  }

  changeFavorites = (favoriteList: Isong[]) => {
    this.setState({ favorites: favoriteList });
  };

  render() {
    const { favorites, loading } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        <FavoritesWrapper>
          Favorites
          { loading
            ? <Loading />
            : <MusicCard
              listaDeMusicas={ favorites }
              changeFavorites = { this.changeFavorites }
            />
          }
        </FavoritesWrapper>
      </div>
    );
  }
}

export default Favorites;
