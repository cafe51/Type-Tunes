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
  aviso: string;
}

export type SearchFormProps = {
  artistName: string;
  handleChange: (event: InsertEventInterface) => void;
  handleClick: () => void;
  disabled: boolean;
}
