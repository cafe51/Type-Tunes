import React from 'react';
import AlbumCard from './AlbumCard';
import { AlbumCardsListProps } from '../../types';
import { IAlbumData } from '../../interfaces';
import { AlbumCardsListWrapper, SearchResultsWrapper } from '../../styles/AlbumStyles';


export default class AlbumCardsList extends React.Component<AlbumCardsListProps> {

  render() {
    const { displayedResult, notice }  = this.props;
    return (
      <AlbumCardsListWrapper>
        <h2>{ notice }</h2>
        { displayedResult.length > 0
          ? (
            <SearchResultsWrapper>
              {displayedResult.map(
                (albumData: IAlbumData) => <AlbumCard albumData={ albumData } key={ albumData.collectionId }/>,
              )}
            </SearchResultsWrapper>
          )
          : '' }
      </AlbumCardsListWrapper>
    );
  }
}
