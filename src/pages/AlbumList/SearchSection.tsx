import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { SearchSectionProps } from '../../types';
import { SearchSectionWrapper } from '../../styles/SearchStyles';




class SearchSection extends React.Component<SearchSectionProps> {
  render() {
    const { artistNameInput, isFormDisabled, handleInputChange, fetchArtistAlbums, displayedResult, searchedArtist } = this.props;
  
    return (
      <SearchSectionWrapper>
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
      </SearchSectionWrapper>
    );
  }

}

export default SearchSection;