import React from 'react';
import AlbumCard from './AlbumCard';
import styled from 'styled-components';
import { AlbumCardsListProps } from '../../types';
import { IAlbumData } from '../../interfaces';

const AlbumCardsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  color: white;

  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
    text-shadow: 0px 4px 4px #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
  
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 99%;
  color: white;
  text-shadow: 0px 0px 10px #C881F8;

`;

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
