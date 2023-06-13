import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumCardProps } from '../../types';
import { AlbumCardWrapper } from '../../styles/AlbumStyles';


export default class AlbumCard extends React.Component<AlbumCardProps> {
  render() {
    const { albumData, key } = this.props; 
    const {
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
    } = albumData;
    

    return (
      <AlbumCardWrapper key={key}>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div>
            <img alt={ collectionName } src={ artworkUrl100 } />
          </div>
        </Link>
        <h3 data-testid="album-name">{collectionName}</h3>
        <h4>$ { collectionPrice }</h4>
      </AlbumCardWrapper>
    );
  }
}