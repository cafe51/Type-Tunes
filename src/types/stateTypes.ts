import { Isong, IdefaultUser, Iartist } from '../interfaces';

export type LoginStateType = {
  name: string
  disabled: boolean,
  isLoading: boolean,
  redirect: boolean,
}

export type MusicComponentState = {
  loading: boolean,
  favoritas: Isong[],
  currentSongId: string | null,
}

export type headerStateType = {
  user: IdefaultUser | null;
  loading: boolean;
}

export type SearchState = {
  isFormDisabled: boolean,
  artistNameInput: string,
  searchedArtist: string,
  isLoading: boolean,
  searchResult: [] | Iartist[];
  displayedResult: [] | Iartist[];
  albumsToShow: number;
  notice: string,
}

export type ProfileEditState = {
  loading: boolean,
  disabledButton: boolean,
  user: IdefaultUser,
  redirect: false,
}
