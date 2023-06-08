import React from 'react';
import AlbumCard from './AlbumCard';

export default class AlbumCardsList extends React.Component<any> {

  render() {
    const { displayedResult, notice }  = this.props;
    return (
      <div>
        <h2>{ notice }</h2>
        { displayedResult.length > 0
          ? (
            <div>
              {displayedResult.map(
                (albumData: any) => <div key={ albumData.collectionId }><AlbumCard albumData={ albumData }/></div>,
              )}
            </div>
          )
          : '' }
      </div>
    );
  }
}
