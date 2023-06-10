import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  cursor: pointer;
    background: linear-gradient(90deg,
      #54008B 34.29%,
      #7F11B0 65.42%,
      #54008B 87.83%
      );
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
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
  background: radial-gradient(
      89.23% 1958.28% at 95.38% 49.55%,

      #350B53 16.93%,
      #221828 38.86%,
      #1F1523 63.89%,
      #24162D 72.69%,
      #25162E 81.14%
    );
  filter: blur(1px);
  box-shadow: 0px 10px 2px #C881F8;
  position: absolute;
  left: 0;
  border-right: 10px solid #C881F8;
`;

const TrackNameWrapper = styled.div`
  text-align: center;
  width: 80%;
  padding: 16px;
`;

const TrackName = styled.h4`
  position: relative;
  color: white;
  text-shadow: 0px 0px 10px #C881F8;
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
        <TrackNameWrapper>
          <TrackName>{trackName}</TrackName>
        </TrackNameWrapper>
      </ProgressBarWrapper>
    );
  }
}

export default ProgressBar;
