import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { SearchSectionProps } from '../../types';

class SearchSection extends React.Component<SearchSectionProps> {
  render() {
    const { artistNameInput, isFormDisabled, handleInputChange, fetchArtistAlbums, displayedResult, searchedArtist } = this.props;
  
    return (
      <div>
        <SearchForm
          artistNameInput={artistNameInput}
          handleChange={handleInputChange}
          handleClick={fetchArtistAlbums}
          disabled={isFormDisabled}
        />
        <SearchResults
          displayedResult={displayedResult}
          searchedArtist={searchedArtist}
        />
      </div>
    );
  }
  
}

export default SearchSection;