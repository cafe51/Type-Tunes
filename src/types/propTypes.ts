import { Isong, Iartist, InsertEventInterface } from '../interfaces';

export type MusicCardProps = {
  trackName: string;
  previewUrl: string;
  trackId: string;
  favoriteChange: (event: InsertEventInterface) => Promise<void>;
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
  searchResult: [] | Iartist[];
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
  searchedArtist: Iartist | string
}