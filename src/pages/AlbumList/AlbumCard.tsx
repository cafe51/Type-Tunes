import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px black;
  background-color: pink;

  img {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 2px 10px black;
    width: 80%;
  }

  a {
    text-decoration: none;
  }
`;


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
      <Card key={ collectionId }>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div>
            <img alt={ collectionName } src={ artworkUrl100.replace('100x100bb', '316x316bf') } />
            <h3>{collectionName} </h3>
            <h4>$ { collectionPrice }</h4>
          </div>
        </Link>
      </Card>
    );
  }
}