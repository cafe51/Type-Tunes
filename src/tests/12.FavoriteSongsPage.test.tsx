import { 
  screen,
  waitFor,
} from '@testing-library/react';

import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('12 - Crie a lista de músicas favoritas', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a requisição para getFavoriteSongs é feita para recuperar as músicas favoritas',
    async () => {
      const spy = jest.spyOn(favoriteSongsAPI, 'getFavoriteSongs');

      renderPath('/favorites');

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(spy).toBeCalled();
    });

  it('Será validado se é exibida a lista de músicas favoritas',
    async () => {
      const favoriteSongs = [
        {
          trackId: '12',
          trackName: 'Track Name 1',
          previewUrl: 'preview-url-1',
        },
        {
          trackId: '21',
          trackName: 'Track Name 2',
          previewUrl: 'preview-url-2',
        },
      ];
      localStorage.setItem('favorite_songs', JSON.stringify(favoriteSongs));

      renderPath('/favorites');

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );
      expect(screen.getByText('Track Name 1')).toBeInTheDocument();
      expect(screen.getByText('Track Name 2')).toBeInTheDocument();
      expect(screen.getAllByTestId('audio-component')).toHaveLength(2);
    });

});
