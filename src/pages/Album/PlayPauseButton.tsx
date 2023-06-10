import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 254, 254, 0);
  color: #C881F8;
  font-size: 36px;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  
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
