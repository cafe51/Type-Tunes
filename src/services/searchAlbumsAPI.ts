import { Iartist } from '../interfaces';

const searchAlbumsAPI = async (artist: string): Promise<Iartist[]> => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  const response = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }: Iartist) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100: artworkUrl100.replace('100x100bb', '316x316bf'),
      releaseDate,
      trackCount,
    }),
  );
  return response;
};

export default searchAlbumsAPI;
