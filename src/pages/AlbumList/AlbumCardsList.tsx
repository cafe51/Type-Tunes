import React from 'react';
import AlbumCard from './AlbumCard';
import { AlbumCardsListProps } from '../../types';
import { IAlbumData } from '../../interfaces';
import { AlbumCardWrapper, AlbumCardsListWrapper, SearchResultsWrapper } from '../../styles/AlbumStyles';
import { BackGroundImage, BackGroundImageOnlyMobile } from '../../styles/SearchStyles';


export default class AlbumCardsList extends React.Component<AlbumCardsListProps> {

  render() {
    const { displayedResult, notice }  = this.props;
    return (
      <AlbumCardsListWrapper>
        <div>
          <h2>{ notice }</h2>
        </div>
        { displayedResult.length > 0
          ? (
            <SearchResultsWrapper>
              {displayedResult.map(
                (albumData: IAlbumData) => <AlbumCardWrapper key={ albumData.collectionId }><AlbumCard albumData={ albumData } /></AlbumCardWrapper>,
              )}
              <BackGroundImageOnlyMobile />
            </SearchResultsWrapper>
          )
          : '' }
      </AlbumCardsListWrapper>
    );
  }
}
