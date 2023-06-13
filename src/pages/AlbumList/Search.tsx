import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SearchSection from './SearchSection';
import { InsertEventInterface} from '../../interfaces';
import { SearchState } from '../../types';
import { SearchWrapper, SearchWrapperMain } from '../../styles/SearchStyles';

class Search extends React.Component {
  state: any = {
    isFormDisabled: true,
    artistNameInput: '',
    searchedArtist: '',
    isLoading: false,
    searchResult: [],
    displayedResult: [], 
    albumsToShow: window.innerWidth > 768 ? 6 : 2,
    notice: 'Pesquise uma banda ou artista',
    isLoadingMore: false
  };
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { searchResult, albumsToShow } = this.state;

    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight * 0.75) {
      this.setState({
        isLoadingMore: true,
      }, () => {
        this.setState({
          albumsToShow: albumsToShow + (window.innerWidth > 768 ? 3 : 1),
          displayedResult: searchResult.slice(0, albumsToShow + (window.innerWidth > 768 ? 3 : 1)),
          isLoadingMore: false,
        });
      });
    }
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
    const { artistNameInput, isFormDisabled, searchedArtist, displayedResult, isLoading, isLoadingMore } = this.state;
  
    return (
      <SearchWrapperMain>
        <Header />
        <SearchWrapper data-testid="page-search">
          { isLoading 
            ? <Loading /> 
            : <SearchSection
              artistNameInput={artistNameInput}
              isFormDisabled={isFormDisabled}
              handleInputChange={this.handleInputChange}
              fetchArtistAlbums={this.fetchArtistAlbums}
              displayedResult={displayedResult}
              searchedArtist={searchedArtist}
              isLoadingMore={isLoadingMore}
            /> 
          }
        </SearchWrapper>
      </SearchWrapperMain>
    );
  }
  
}

export default Search;
