import React from 'react';
import AlbumCardsList from './AlbumCardsList';
import { SearchResultProps } from '../../types';
import styled from 'styled-components';

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  text-align: center;
  color: white;
  font-family: 'Montserrat';

  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
    text-shadow: 0px 4px 4px #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

class SearchResults extends React.Component<SearchResultProps> {
  render() {
    const { searchResult, searchedArtist } = this.props;

    return (
      <SearchResultsWrapper>
        <AlbumCardsList
          searchResult={searchResult}
          notice={searchResult.length > 0 ? `Resultado de álbuns de: ${searchedArtist}` : 'Nenhum álbum foi encontrado'}
        />
      </SearchResultsWrapper>
    );
  }
}

export default SearchResults;
