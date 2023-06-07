import { Isong, Iartist, InsertEventInterface } from '../interfaces';

export type AudioComponentProps = {
  trackName: string;
  previewUrl: string;
}

export type MusicCardProps = {
  listaDeMusicas: Isong[];
  changeFavorites?: (favoriteList: Isong[]) => void;
}

export type AlbumCardsListProps = {
  searchResult: [] | Iartist[];
  aviso: string;
}

export type SearchFormProps = {
  artistName: string;
  handleChange: (event: InsertEventInterface) => void;
  handleClick: () => void;
  disabled: boolean;
}
