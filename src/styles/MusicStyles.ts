import styled from 'styled-components';

export const FavoriteStar = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MusicCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  word-wrap: break-word;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const ButtonAndCheckFavorite = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MusicCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  width: 80%;
  word-wrap: break-word;
`;

export const CustomButton = styled.button`
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


export const ProgressBarWrapper = styled.div`
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

export const ProgressBarFill = styled.div`
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

export const TrackNameWrapper = styled.div`
  text-align: center;
  width: 80%;
  padding: 16px;
`;

export const TrackName = styled.h4`
  position: relative;
  text-shadow: 0px 0px 10px #C881F8;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;