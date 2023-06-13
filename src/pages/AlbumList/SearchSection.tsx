import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { SearchSectionProps } from '../../types';
import { BackGroundImage, SearchSectionWrapper, SearchSectionFormAndResults } from '../../styles/SearchStyles';




class SearchSection extends React.Component<SearchSectionProps> {
  render() {
    const { artistNameInput, isFormDisabled, handleInputChange, fetchArtistAlbums, displayedResult, searchedArtist } = this.props;
  
    return (
      <SearchSectionWrapper>
        <SearchSectionFormAndResults>
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
        </SearchSectionFormAndResults>
        <BackGroundImage />
      </SearchSectionWrapper>
    );
  }

}

export default SearchSection;