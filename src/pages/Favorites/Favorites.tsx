import React from 'react';
import MusicCard from '../Album/MusicComponent';
import Loading from '../../components/Loading';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Header from '../../components/Header';
import { Isong } from '../../interfaces';
import { BackgroundImageFavorites, FavoriteMainWrapper, FavoritesWrapper, Title, TitleAndBackground, TitleAndBackgroundWrapper } from '../../styles/FavoritesStyles';



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
      <FavoriteMainWrapper id='favoritMain' data-testid="page-favorites">
        <Header />
        <FavoritesWrapper>
          <TitleAndBackgroundWrapper>
            <TitleAndBackground>
              <Title><h1>Favorites</h1></Title>
              <BackgroundImageFavorites />
            </TitleAndBackground>
          </TitleAndBackgroundWrapper>
          { loading
            ? <Loading />
            : <MusicCard
              listaDeMusicas={ favorites }
              changeFavorites = { this.changeFavorites }
            />
          }
        </FavoritesWrapper>
      </FavoriteMainWrapper>
    );
  }
}

export default Favorites;
