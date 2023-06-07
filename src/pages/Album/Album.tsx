import React from 'react';
import {withRouter, WithRouterProps} from '../../utils/withRouter';
import Header from '../../components/Header';
import MusicCard from './MusicComponent';
import Loading from '../../components/Loading';
import getMusics from '../../services/musicsAPI';
import { Isong, Iartist } from '../../interfaces';


type Props = WithRouterProps<{ id: string }>;

class Album extends React.Component<Props> {
  state = {
    musicas: [],
    loading: false,
  };

  async componentDidMount() {
    const { match: { params: { id } }  } = this.props;
    const array: Isong[] & Iartist[] = await getMusics(id);
    const listaFiltrada = array.filter((e) => e.trackName);
    const listaDeMusicas = listaFiltrada.map(({ trackName, trackId, previewUrl, }) => {
      const e = { trackName, trackId, previewUrl };
      return e;
    });

    const albumDetails = (
      <>
        <div>
          <h1 data-testid="artist-name">
            {array[0].artistName}
          </h1>
          <img
            alt={ array[0].collectionName }
            src={ array[0].artworkUrl100 }
          />
          <h2 data-testid="album-name">
            {array[0].collectionName}
          </h2>
          <p>{array[0].collectionPrice}</p>
        </div>
        <MusicCard
          listaDeMusicas={ listaDeMusicas }
        />
      </>
    );

    this.setState({ loading: true },
      () => {
        this.setState({
          loading: false,
          musicas: albumDetails,
        });
      });
  }

  render() {
    const { musicas, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Loading /> : musicas}
      </div>
    );
  }
}

export default withRouter(Album);
