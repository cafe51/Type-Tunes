import React from 'react';
import AlbumCard from './AlbumCard';
import { AlbumCardsListProps } from '../../types';

export default class AlbumCardsList extends React.Component<AlbumCardsListProps> {

  render() {
    const { searchResult, notice }  = this.props;
    return (
      <div>
        <h2>{ notice }</h2>
        { searchResult.length > 0
          ? (
            <div>
              {searchResult.map(
                (albumData) => <div key={ albumData.collectionId }><AlbumCard albumData={ albumData }/></div>,
              )}
            </div>
          )
          : '' }
      </div>
    );
  }
}
