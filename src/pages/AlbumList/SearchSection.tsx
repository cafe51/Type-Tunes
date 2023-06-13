import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { SearchSectionProps } from '../../types';
import backgroundSerchScreen from '../../images/searchBackground.png';
import styled from 'styled-components';


const BackGroundImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${backgroundSerchScreen});
  background-repeat: no-repeat;
  background-size: 120%;
  border-top: 4px ridge #e4bcff;
  box-shadow: 1px 1px 20px #e4bcff;
  /* border-top: 2px solid white; */
  /* justify-self: flex-end; */
`;

const SearchSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

class SearchSection extends React.Component<SearchSectionProps> {
  render() {
    const { artistNameInput, isFormDisabled, handleInputChange, fetchArtistAlbums, displayedResult, searchedArtist } = this.props;
  
    return (
      <SearchSectionWrapper>
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
        <BackGroundImage />
      </SearchSectionWrapper>
    );
  }

}

export default SearchSection;