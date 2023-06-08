import React from 'react';
import {withRouter, WithRouterProps} from '../../utils/withRouter';
import Header from '../../components/Header';
import MusicCard from './MusicComponent';
import Loading from '../../components/Loading';
import getMusics from '../../services/musicsAPI';
import { Isong, Iartist } from '../../interfaces';
import styled from 'styled-components';

const AlbumWrapper = styled.div`
  padding-top: 100px;
  width: 99%;
`;


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
      <section data-testid="page-album">
        <Header />
        <AlbumWrapper>
          { loading ? <Loading /> : musicas}
        </AlbumWrapper>
      </section>
    );
  }
}

export default withRouter(Album);
