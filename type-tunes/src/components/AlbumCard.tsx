import React from 'react';
import { Link } from 'react-router-dom';

type AlbumCardProps = {
  albumData: { 
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
  }
}

export default class AlbumCard extends React.Component<AlbumCardProps> {
  render() {
    const { albumData } = this.props; 
    const {
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
    } = albumData;

    return (
      <div key={ collectionId }>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div>
            <h3>{collectionName}</h3>
            <img alt={ collectionName } src={ artworkUrl100 } />
            <h4>{ collectionPrice }</h4>
          </div>
        </Link>
      </div>
    );
  }
}