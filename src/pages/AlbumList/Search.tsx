// Search.js
import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SearchSection from './SearchSection';
import { InsertEventInterface} from '../../interfaces';
import { SearchState } from '../../types';

class Search extends React.Component {
  state: SearchState = {
    isFormDisabled: true,
    artistNameInput: '',
    searchedArtist: '',
    isLoading: false,
    searchResult: [],
    notice: 'Pesquise uma banda ou artista',
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
          isFormDisabled: true,
          notice: 'Nenhum álbum foi encontrado',
        });
      });
  };

  render() {
    const { artistNameInput, isFormDisabled, searchedArtist, searchResult, isLoading } = this.state;
  
    return (
      <div data-testid="page-search">
        <Header />
        { isLoading 
          ? <Loading /> 
          : <SearchSection
            artistNameInput={artistNameInput}
            isFormDisabled={isFormDisabled}
            handleInputChange={this.handleInputChange}
            fetchArtistAlbums={this.fetchArtistAlbums}
            searchResult={searchResult}
            searchedArtist={searchedArtist}
          /> 
        }
      </div>
    );
  }
  
}

export default Search;
