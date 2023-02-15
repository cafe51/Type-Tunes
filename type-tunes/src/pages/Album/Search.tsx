import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SearchForm from './SearchForm';
import AlbumCardsList from './AlbumCardsList';
import { Iartist, InsertEventInterface} from '../../interfaces';

type SearchState = {
  disabled: boolean;
  artistName: string;
  searchBar: string;
  isLoading: boolean;
  searchResult: [] | Iartist[];
  aviso: string;
}


class Search extends React.Component {
  state: SearchState = {
    disabled: true,
    artistName: '',
    searchBar: '',
    isLoading: false,
    searchResult: [],
    aviso: 'Pesquise uma banda ou artista',
  };

  handleChange = ({ target }: InsertEventInterface ) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
      disabled: !(target.value.length >= 2)
    });
  };


  handleClick = async () => {
    const { artistName } = this.state;
    this.setState({ isLoading: true, searchBar: artistName },
      async () => {
        const artista = await searchAlbumsAPI(artistName);
        this.setState({
          isLoading: false,
          artistName: '',
          searchResult: artista,
          disabled: true,
          aviso: 'Nenhum álbum foi encontrado',
        });
      });
  };

  render() {
    const { artistName, disabled, searchBar, searchResult, isLoading, aviso } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        { isLoading
          ? ''
          : (
            <h1>
              Resultado de álbuns de:
              {' '}
              { searchBar }
            </h1>
          )}
        { isLoading
          ? <Loading />
          : <div>
            <SearchForm
              artistName={ artistName }
              handleChange={ this.handleChange }
              handleClick= { this.handleClick }
              disabled = { disabled }
            />
            <AlbumCardsList
              searchResult={ searchResult }
              aviso={aviso}
            />
          </div>
        }
      </div>
    );
  }
}

export default Search;
