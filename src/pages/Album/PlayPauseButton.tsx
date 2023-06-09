import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const CustomButton = styled.button`
  background-color: pink;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
`;

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
