import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SearchSection from './SearchSection';
import { InsertEventInterface} from '../../interfaces';
import styled from 'styled-components';
import { SearchState } from '../../types';
import { SearchWrapper } from '../../styles/SearchStyles';

class Search extends React.Component {
  state: SearchState = {
    isFormDisabled: true,
    artistNameInput: '',
    searchedArtist: '',
    isLoading: false,
    searchResult: [],
    displayedResult: [], 
    albumsToShow: 2,
    notice: 'Pesquise uma banda ou artista',
  };
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { searchResult, albumsToShow } = this.state;

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

    this.setState({
      albumsToShow: albumsToShow + 1,
      displayedResult: searchResult.slice(0, albumsToShow + 1),
    });
  };


  handleInputChange = ({ target }: InsertEventInterface ) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
      isFormDisabled: !(target.value.length >= 2)
    });
  };

  fetchArtistAlbums = async () => {
    const { artistNameInput } = this.state;
    this.setState({ isLoading: true, searchedArtist: artistNameInput },
      async () => {
        const artistAlbums = await searchAlbumsAPI(artistNameInput);
        this.setState({
          isLoading: false,
          artistNameInput: '',
          searchResult: artistAlbums,
          displayedResult: artistAlbums.slice(0, this.state.albumsToShow), // atualiza os álbuns atualmente exibidos
          isFormDisabled: true,
          notice: 'Nenhum álbum foi encontrado',
        });
      });
  };


  render() {
    const { artistNameInput, isFormDisabled, searchedArtist, displayedResult, isLoading } = this.state;
  
    return (
      <div data-testid="page-search">
        <Header />
        <SearchWrapper>
          { isLoading 
            ? <Loading /> 
            : <SearchSection
              artistNameInput={artistNameInput}
              isFormDisabled={isFormDisabled}
              handleInputChange={this.handleInputChange}
              fetchArtistAlbums={this.fetchArtistAlbums}
              displayedResult={displayedResult}
              searchedArtist={searchedArtist}
            /> 
          }
        </SearchWrapper>
      </div>
    );
  }
  
}

export default Search;
