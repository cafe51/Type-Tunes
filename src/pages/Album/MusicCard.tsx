import React from 'react';
import { MusicCardProps } from '../../types';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import FavoriteCheckBox from './FavoriteCheckBox';
import PlayPauseButton from './PlayPauseButton';
import AudioPlayer from './AudioPlayer';


const MusicCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  word-wrap: break-word;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const ButtonAndCheckFavorite = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;


class MusicCard extends React.Component<MusicCardProps> {
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
        // Inform the parent that this track is playing
        this.props.handleTrackPlay(this.props.trackId);
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
    event.stopPropagation();
    this.handleProgressBarInteraction(event);
    this.setState({ dragging: true });
  };

  handleProgressBarEnd = (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();
    this.setState({ dragging: false });
  };

  handleProgressBarMove = (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();
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

  componentDidUpdate(prevProps: MusicCardProps) {
    if (this.props.playingTrackId !== this.props.trackId && this.props.playingTrackId !== prevProps.playingTrackId) {
      const audio = this.audioRef.current;
      if (audio && !audio.paused) {
        audio.pause();
        this.setState({ isPlaying: false });
      }
    }
  }

  render() {
    const { trackName, previewUrl, trackId, favoriteChange, favoriteChecked, isLoading } = this.props;
    const { progress, isPlaying } = this.state;
    return (
      <MusicCardWrapper>
        <AudioPlayer
          audioRef={this.audioRef}
          previewUrl={previewUrl}
          handleTimeUpdate={this.handleTimeUpdate}
        />
        <ProgressBar
          progress={progress}
          trackName={trackName}
          handleProgressBarStart={this.handleProgressBarStart}
          handleProgressBarEnd={this.handleProgressBarEnd}
          handleProgressBarMove={this.handleProgressBarMove}
        />
        <ButtonAndCheckFavorite>
          <PlayPauseButton
            isPlaying={isPlaying}
            handlePlayPause={this.handlePlayPause}
          />
          <FavoriteCheckBox
            isLoading={isLoading}
            trackId={trackId}
            favoriteChange={favoriteChange}
            favoriteChecked={favoriteChecked}
          />

        </ButtonAndCheckFavorite>

      </MusicCardWrapper>
    );
  }
}

export default MusicCard;
