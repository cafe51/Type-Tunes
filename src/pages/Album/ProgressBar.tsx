import React from 'react';
import { ProgressBarFill, ProgressBarWrapper, TrackName, TrackNameWrapper } from '../../styles/MusicStyles';

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
