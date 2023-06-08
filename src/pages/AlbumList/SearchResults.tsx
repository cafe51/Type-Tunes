import React from 'react';
import AlbumCardsList from './AlbumCardsList';
import { SearchResultProps } from '../../types';

class SearchResults extends React.Component<SearchResultProps> {
  render() {
    const { searchResult, searchedArtist } = this.props;

    return (
      <div>
        <AlbumCardsList
          searchResult={searchResult}
          notice={searchResult.length > 0 ? `Resultado de álbuns de: ${searchedArtist}` : 'Nenhum álbum foi encontrado'}
        />
      </div>
    );
  }
}

export default SearchResults;
