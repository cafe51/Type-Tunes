import React from 'react';

type AudioPlayerProps = {
  audioRef: React.RefObject<HTMLAudioElement>,
  previewUrl: string,
  handleTimeUpdate: () => void
};

class AudioPlayer extends React.Component<AudioPlayerProps> {
  componentDidMount() {
    const audio = this.props.audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', this.props.handleTimeUpdate);
    }
  }

  componentWillUnmount() {
    const audio = this.props.audioRef.current;
    if (audio) {
      audio.removeEventListener('timeupdate', this.props.handleTimeUpdate);
    }
  }

  render() {
    return (
      <audio data-testid="audio-component"
        ref={this.props.audioRef} src={this.props.previewUrl}>
        <track kind="captions" />
        <p>O seu navegador não suporta o elemento</p>
        <code>audio</code>
      </audio>
    );
  }
}

export default AudioPlayer;
