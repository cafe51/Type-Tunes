import React from 'react';
import Loading from '../../components/Loading';
import AudioComponent from './AudioComponent';
import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { Isong, InsertEventInterface } from '../../interfaces';
import { MusicCardProps, MusicCardState } from '../../types';

class MusicCard extends React.Component<MusicCardProps> {
  state: MusicCardState = {
    loading: false,
    favoritas: [],
    currentSongId: null,
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

  handleChange = async ({ target: {id, checked} }: InsertEventInterface) => {
    const { favoritas } = this.state;
    const song = this.props.listaDeMusicas.find((song) => Number(song.trackId) === Number(id));
    
    song ? await this.addOrRemoveSong(song, checked, favoritas) : this.setState({ currentSongId: null });
  };

  checkIfIsChecked = (id: string) => this.state.favoritas.filter((song) => song.trackId === id).length >= 1;

  render() {
    const { loading, currentSongId } = this.state;
    const { listaDeMusicas } = this.props;
    return (
      <div>
        <div style={ { display: 'flex', flexFlow: 'wrap', margin: '5px', padding: '5px', border: '1px solid black', width: '1000px' } } >
          { listaDeMusicas.map(({ trackId, trackName, previewUrl
          }) => {
            const isLoading = (currentSongId === trackId || loading);
            const card = (
              <div key={ trackId } style={ { display: 'flex', flexFlow: 'wrap', margin: '5px', padding: '5px', border: '1px solid black', width: '400px' } }>
                <AudioComponent trackName={trackName} previewUrl={previewUrl} />
                { isLoading
                  ? <div><Loading /></div>
                  :
                  <label htmlFor={ trackId }>
                    Favorita
                    <input
                      data-testid={ `checkbox-music-${trackId}` }
                      type="checkbox"
                      id={ trackId }
                      onChange={ this.handleChange }
                      checked={ this.checkIfIsChecked(trackId) }
                    />
                  </label>}
              </div>
            );
            return card;
          })}
        </div>
        
      </div>
    );
  }
}

export default MusicCard;