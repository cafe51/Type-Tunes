import { Isong, Iartist, InsertEventInterface, InsertCheckEventInterface, IAlbumData } from '../interfaces';

export type AlbumCardProps = {
  albumData: IAlbumData
  key?: number;
}

export type FavoriteCheckBoxProps = {
  isLoading: boolean,
  trackId: string,
  favoriteChange: (event: InsertCheckEventInterface) => Promise<void>;
  favoriteChecked: (arg0: string) => boolean
};


export type MusicCardProps = {
  trackName: string;
  previewUrl: string;
  trackId: string;
  favoriteChange: (event: InsertCheckEventInterface) => Promise<void>;
  favoriteChecked: (arg0: string) => boolean;
  isLoading: boolean;
  playingTrackId: string | null;
  handleTrackPlay: (arg0: string) => void;
}

export type MusicComponentProps = {
  listaDeMusicas: Isong[];
  changeFavorites?: (favoriteList: Isong[]) => void;
}

export type AlbumCardsListProps = {
  displayedResult: [] | Iartist[];
  notice: string;
}

export type SearchFormProps = {
  artistNameInput: string;
  handleChange: (event: InsertEventInterface) => void;
  handleClick: () => void;
  disabled: boolean;
}

export type SearchResultProps = {
  searchedArtist: Iartist  | string;
  displayedResult: [] | Iartist[];
}

export type SearchSectionProps = {
  artistNameInput: string;
  isFormDisabled: boolean;
  handleInputChange: (event: InsertEventInterface) => void;
  fetchArtistAlbums: () => void
  displayedResult: [] | Iartist[];
  searchedArtist: Iartist | string;
  isLoadingMore: boolean;
}