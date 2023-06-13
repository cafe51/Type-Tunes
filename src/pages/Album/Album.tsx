import React from 'react';
import {withRouter, WithRouterProps} from '../../utils/withRouter';
import Header from '../../components/Header';
import MusicCard from './MusicComponent';
import Loading from '../../components/Loading';
import getMusics from '../../services/musicsAPI';
import { Isong, Iartist } from '../../interfaces';
import AlbumCard from '../AlbumList/AlbumCard';
import { AlbumCardWithTitle, AlbumCardWithTitleWrapper, AlbumCardWrapperMusicList, AlbumWrapper, AlbumWrapperMain } from '../../styles/AlbumStyles';


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
      <AlbumWrapper>
        <AlbumCardWithTitleWrapper>
          <AlbumCardWithTitle>
            <h1 data-testid="artist-name">
              {array[0].artistName}
            </h1>
            <AlbumCardWrapperMusicList key={array[0].collectionId}><AlbumCard albumData={array[0]} /></AlbumCardWrapperMusicList>
          </AlbumCardWithTitle>
        </AlbumCardWithTitleWrapper>
        <MusicCard
          listaDeMusicas={ listaDeMusicas }
        />
      </AlbumWrapper>
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
      <AlbumWrapperMain data-testid="page-album">
        <Header />
        {/* <AlbumWrapper> */}
        { loading
          ? <Loading />
          : musicas
        }
        {/* </AlbumWrapper> */}
      </AlbumWrapperMain>
    );
  }
}

export default withRouter(Album);
