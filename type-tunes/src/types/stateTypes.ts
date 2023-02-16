import { Isong, IdefaultUser, Iartist } from '../interfaces';

export type LoginStateType = {
  name: string
  disabled: boolean,
  isLoading: boolean,
  redirect: boolean,
}

export type MusicCardState = {
  loading: boolean,
  favoritas: Isong[],
  currentSongId: string | null,
}

export type headerStateType = {
  user: IdefaultUser | null;
  loading: boolean;
}

export type SearchState = {
  disabled: boolean;
  artistName: string;
  searchBar: string;
  isLoading: boolean;
  searchResult: [] | Iartist[];
  aviso: string;
}
