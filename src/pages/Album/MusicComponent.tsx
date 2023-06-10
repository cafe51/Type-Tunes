import React from 'react';
import MusicCard from './MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { Isong, InsertEventInterface } from '../../interfaces';
import { MusicComponentProps, MusicComponentState } from '../../types';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MusicCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  width: 80%;
  word-wrap: break-word;
`;

class MusicComponent extends React.Component<MusicComponentProps> {
  state: MusicComponentState = {
    loading: false,
    favoritas: [],
    currentSongId: null,
    playingTrackId: null,
  };


  async componentDidMount() {
    try {
      this.setState({ loading: true },
        async () => {
          this.setState({
            loading: false,
            favoritas: await getFavoriteSongs(),
          });
        });
    } catch(error) {
      console.log(error);
    }
  }

  addOrRemoveSong = async (song: Isong, checked: boolean, favoritas: Isong[]) => {
    if (checked) {
      try {
        this.setState({ currentSongId: song.trackId });
        await addSong(song);
        this.setState({ favoritas: [...favoritas, song], currentSongId: null });
      } catch(error){
        console.log(error);
        this.setState({ currentSongId: null });
      }
        
    } else {
      try {
        this.setState({ currentSongId: song.trackId });
        await removeSong(song);
        this.setState({ favoritas: await getFavoriteSongs(), currentSongId: null }, () => {
          this.props.changeFavorites ? this.props.changeFavorites(this.state.favoritas) : '';
        });
      } catch(error){
        console.log(error);
        this.setState({ currentSongId: null });
      }
    }
  };

  handleChange = async (event: InsertEventInterface) => {
    const { favoritas } = this.state;
    const song = this.props.listaDeMusicas.find((song) => Number(song.trackId) === Number(event.target.id));
    
    song ? await this.addOrRemoveSong(song, event.target.checked, favoritas) : this.setState({ currentSongId: null });
  };

  handleTrackPlay = (trackId: string) => {
    this.setState({ playingTrackId: trackId });
  };

  checkIfIsChecked = (id: string) => this.state.favoritas.filter((song) => song.trackId === id).length >= 1;

  render() {
    const { loading, currentSongId, playingTrackId } = this.state;
    const { listaDeMusicas } = this.props;

    return (
      <ListWrapper>
        <MusicCardList
        >
          { listaDeMusicas.map(({ trackId, trackName, previewUrl
          }) => {
            const isLoading = (currentSongId === trackId || loading);
            const card = (
              <CardWrapper key={ trackId }>
                <MusicCard
                  trackName={trackName}
                  previewUrl={previewUrl}
                  trackId={trackId}
                  favoriteChange={this.handleChange}
                  favoriteChecked={this.checkIfIsChecked}
                  isLoading={isLoading}
                  playingTrackId={playingTrackId}
                  handleTrackPlay={this.handleTrackPlay}
                />
              </CardWrapper>
            );
            return card;
          })}
        </MusicCardList>
        
      </ListWrapper>
    );
  }
}

export default MusicComponent;