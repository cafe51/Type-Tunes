import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { CustomButton } from '../../styles/MusicStyles';

type PlayPauseButtonProps = {
  isPlaying: boolean,
  handlePlayPause: () => void
};

class PlayPauseButton extends React.Component<PlayPauseButtonProps> {
  render() {
    const { isPlaying, handlePlayPause } = this.props;
    return (
      <CustomButton onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </CustomButton>
    );
  }
}

export default PlayPauseButton;
