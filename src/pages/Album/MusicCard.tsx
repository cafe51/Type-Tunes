import React from 'react';
import { MusicCardProps } from '../../types';
import styled from 'styled-components';

const MusicCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 100%;
  word-wrap: break-word;
  background-color: yellow;
`;

class MusicCard extends React.Component<MusicCardProps> {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <MusicCardWrapper>
        <h4>{trackName}</h4>

        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <p>O seu navegador não suporta o elemento</p>
          <code>audio</code>
        </audio>
      </MusicCardWrapper>
    );
  }
}

export default MusicCard;