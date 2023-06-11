import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FavoriteCheckBoxProps } from '../../types';
import { FavoriteStar } from '../../styles/MusicStyles';

class FavoriteCheckBox extends React.Component<FavoriteCheckBoxProps> {
  render() {
    const { isLoading, trackId, favoriteChange, favoriteChecked } = this.props;
    
    const commonStyles = {
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '2em',
      animation: isLoading ? 'rotation 0.5s infinite linear' : undefined,
    };
  
    const checkedStyles = {
      color: 'yellow',
      filter: 'drop-shadow(0px 0px 10px yellow)',
    };
  
    const uncheckedStyles = {
      color: '#C881F8',
    };

    return (
      <FavoriteStar
        id={ trackId }
        data-testid={ `checkbox-music-${trackId}` }
        onClick={() => favoriteChange({
          target: {
            id: trackId,
            checked: !favoriteChecked(trackId)
          }
        })}
      >
        {favoriteChecked(trackId) 
          ? <FaStar data-testid={ `checked-star-${trackId}` } style={{ ...commonStyles, ...checkedStyles }} />
          : <FaRegStar data-testid={ `unchecked-star-${trackId}` } style={{ ...commonStyles,...uncheckedStyles }} />}
      </FavoriteStar>
    );
  }
}

export default FavoriteCheckBox;
