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

const ProgressBar = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  background-color: #ddd;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #aaa;
`;

class MusicCard extends React.Component<MusicCardProps, { progress: number, isPlaying: boolean, dragging: boolean }> {
  audioRef = React.createRef<HTMLAudioElement>();

  state = {
    progress: 0,
    isPlaying: false,
    dragging: false
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
    if (audio && !this.state.dragging) {
      this.setState({ progress: (audio.currentTime / audio.duration) * 100 });
    }
  };

  handleProgressBarInteraction = (event: React.MouseEvent | React.TouchEvent) => {
    const audio = this.audioRef.current;
    if (audio) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ('clientX' in event ? event.clientX : event.touches[0].clientX) - rect.left;
      const clickedPosition = x / rect.width;
      audio.currentTime = clickedPosition * audio.duration;
      this.setState({ progress: clickedPosition * 100 });
    }
  };

  handleProgressBarStart = (event: React.MouseEvent | React.TouchEvent) => {
    this.handleProgressBarInteraction(event);
    this.setState({ dragging: true });
  };

  handleProgressBarEnd = (event: React.MouseEvent | React.TouchEvent) => {
    this.setState({ dragging: false });
  };

  handleProgressBarMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (this.state.dragging) {
      this.handleProgressBarInteraction(event);
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

        <audio data-testid="audio-component"
          ref={this.audioRef} src={ previewUrl }>
          <track kind="captions" />
          <p>O seu navegador não suporta o elemento</p>
          <code>audio</code>
        </audio>

        <ProgressBar 
          onMouseDown={this.handleProgressBarStart}
          onMouseUp={this.handleProgressBarEnd}
          onMouseMove={this.handleProgressBarMove}
          onTouchStart={this.handleProgressBarStart}
          onTouchEnd={this.handleProgressBarEnd}
          onTouchMove={this.handleProgressBarMove}
        >
          <ProgressBarFill style={{ width: `${progress}%` }} />
        </ProgressBar>

        <CustomButton onClick={this.handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </CustomButton>
      </MusicCardWrapper>
    );
  }
}

export default MusicCard;
