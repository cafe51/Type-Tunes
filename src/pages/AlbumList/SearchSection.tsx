import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { SearchSectionProps } from '../../types';
import { SearchSectionWrapper, SearchFormWrapper } from '../../styles/SearchStyles';
import Loading from '../../components/Loading';




class SearchSection extends React.Component<any> {
  render() {
    const { artistNameInput, isFormDisabled, handleInputChange, fetchArtistAlbums, displayedResult, searchedArtist, isLoadingMore } = this.props;
  
    return (
      <SearchSectionWrapper>
        <SearchFormWrapper>
          <SearchForm
            artistNameInput={artistNameInput}
            handleChange={handleInputChange}
            handleClick={fetchArtistAlbums}
            disabled={isFormDisabled}
          />
        </SearchFormWrapper>
        <SearchResults
          displayedResult={displayedResult}
          searchedArtist={searchedArtist}
        />
        {isLoadingMore && <Loading />}
      </SearchSectionWrapper>
    );
  }

}

export default SearchSection;