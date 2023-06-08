import { Isong, Iartist, InsertEventInterface } from '../interfaces';

export type MusicCardProps = {
  trackName: string;
  previewUrl: string;
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
  searchResult: [] | Iartist[];
  searchedArtist: Iartist  | string
}

export type SearchSectionProps = {
  artistNameInput: string;
  isFormDisabled: boolean;
  handleInputChange: (event: InsertEventInterface) => void;
  fetchArtistAlbums: () => void
  searchResult: [] | Iartist[];
  searchedArtist: Iartist | string
}