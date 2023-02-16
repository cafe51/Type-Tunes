import React from 'react';
import AlbumCard from './AlbumCard';
import { AlbumCardsListProps } from '../../types';

export default class AlbumCardsList extends React.Component<AlbumCardsListProps> {

  render() {
    const { searchResult, aviso }  = this.props;
    return (
      <div>
        { searchResult.length > 0
          ? (
            <div>
              {searchResult.map(
                (albumData) => <div key={ albumData.collectionId }><AlbumCard albumData={ albumData }/></div>,
              )}
            </div>
          )
          : <h2>{ aviso }</h2> }
      </div>
    );
  }
}
