import React from 'react';
import { MusicCardProps } from '../../types';

class MusicCard extends React.Component<MusicCardProps> {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <h4>{trackName}</h4>

        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <p>O seu navegador não suporta o elemento</p>
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

export default MusicCard;