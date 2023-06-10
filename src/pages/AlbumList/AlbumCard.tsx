/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AlbumCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 8px #C881F8;
  margin-bottom: 40px;
  width: 80%;

  img {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 2px 10px black;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 10px #C881F8;
  }

`;

type AlbumCardProps = {
  albumData: { 
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
  }
  key?: number;
}

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
            <h3 data-testid="album-name">{collectionName}</h3>
            <h4>$ { collectionPrice }</h4>
          </div>
        </Link>
      </AlbumCardWrapper>
    );
  }
}