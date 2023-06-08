import React from 'react';
import { MusicCardProps } from '../../types';
import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  word-wrap: break-word;
  background-color: yellow;
`;

const CustomButton = styled.button`
  background-color: pink;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
`;

const ProgressBar = styled.progress`
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

class MusicCard extends React.Component<MusicCardProps> {
  audioRef = React.createRef<HTMLAudioElement>();
  progressRef = React.createRef<HTMLProgressElement>();

  state = {
    progress: 0,
    isPlaying: false
  };

  handlePlayPause = () => {
    const audio = this.audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        this.setState({ isPlaying: true });
      } else {
        audio.pause();
        this.setState({ isPlaying: false });
      }
    }
  };

  handleTimeUpdate = () => {
    const audio = this.audioRef.current;
    if (audio) {
      this.setState({ progress: (audio.currentTime / audio.duration) * 100 });
    }
  };

  handleProgressBarClick = (event: any) => {
    const audio = this.audioRef.current;
    const progress = this.progressRef.current;
    if (audio && progress) {
      const rect = progress.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const clickedPosition = x / rect.width;
      audio.currentTime = clickedPosition * audio.duration;
    }
  };

  componentDidMount() {
    const audio = this.audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', this.handleTimeUpdate);
    }
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;
    if (audio) {
      audio.removeEventListener('timeupdate', this.handleTimeUpdate);
    }
  }

  render() {
    const { trackName, previewUrl } = this.props;
    const { progress, isPlaying } = this.state;
    return (
      <MusicCardWrapper>
        <h4>{trackName}</h4>

        <audio data-testid="audio-component" ref={this.audioRef} src={ previewUrl }>
          <track kind="captions" />
          <p>O seu navegador não suporta o elemento</p>
          <code>audio</code>
        </audio>

        <ProgressBar 
          ref={this.progressRef}
          value={progress} 
          max="100" 
          onClick={this.handleProgressBarClick}
        />

        <CustomButton onClick={this.handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </CustomButton>
      </MusicCardWrapper>
    );
  }
}

export default MusicCard;
