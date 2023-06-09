import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  background-color: green;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: red;
  opacity: 0.8;
  position: absolute;
  left: 0;
`;

const TrackName = styled.h4`
  position: relative;
  color: white;
`;

type ProgressBarProps = {
  progress: number,
  trackName: string,
  handleProgressBarStart: (event: React.MouseEvent | React.TouchEvent) => void,
  handleProgressBarEnd: (event: React.MouseEvent | React.TouchEvent) => void,
  handleProgressBarMove: (event: React.MouseEvent | React.TouchEvent) => void,
};

class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const { progress, trackName, handleProgressBarStart, handleProgressBarEnd, handleProgressBarMove } = this.props;
    return (
      <ProgressBarWrapper
        onMouseDown={handleProgressBarStart}
        onMouseUp={handleProgressBarEnd}
        onMouseMove={handleProgressBarMove}
        onTouchStart={handleProgressBarStart}
        onTouchEnd={handleProgressBarEnd}
        onTouchMove={handleProgressBarMove}
      >
        <ProgressBarFill style={{ width: `${progress}%` }} />
        <TrackName>{trackName}</TrackName>
      </ProgressBarWrapper>
    );
  }
}

export default ProgressBar;
