export interface Iartist {
  artistId: number,
  artistName: string,
  collectionId: number,
  collectionName: string,
  collectionPrice: number,
  artworkUrl100: string,
  releaseDate: string,
  trackCount: number,
}

export interface IdefaultUser {
  name: string,
  email?: string,
  description?: string,
  image?: string,
}

export interface Isong  {
  trackId: string,
  trackName: string,
  previewUrl: string,
  // kind: string,
}

export interface InsertEventInterface {
  target: {
    id: string;
    name: string;
    type: string;
    checked: boolean;
    value: string 
  }
}
