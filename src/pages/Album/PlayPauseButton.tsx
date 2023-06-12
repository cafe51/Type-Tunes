import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
// import { CustomButton } from '../../styles/MusicStyles';

type PlayPauseButtonProps = {
  isPlaying: boolean,
  handlePlayPause: () => void
};

class PlayPauseButton extends React.Component<PlayPauseButtonProps> {
  render() {
    const { isPlaying, handlePlayPause } = this.props;
    return (
      <button onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    );
  }
}

export default PlayPauseButton;
