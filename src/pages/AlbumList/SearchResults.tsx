import React from 'react';
import AlbumCardsList from './AlbumCardsList';
import { SearchResultProps } from '../../types';

class SearchResults extends React.Component<SearchResultProps> {
  render() {
    const { displayedResult, searchedArtist } = this.props;

    return (
      <AlbumCardsList
        displayedResult={displayedResult}
        notice={displayedResult.length > 0
          ? `Resultado de álbuns de: ${searchedArtist}`
          : 'Nenhum álbum foi encontrado'}
      />
    );
  }
}

export default SearchResults;
