import React from 'react';
import { AudioComponentProps } from '../../types';

class AudioComponent extends React.Component<AudioComponentProps> {
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

export default AudioComponent;