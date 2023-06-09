import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as musicsAPI from '../services/musicsAPI';
import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse } from './mocks';

describe('10 - Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a requisição para `getFavoriteSongs` é feita após favoritar uma música',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      
      const spy = jest.spyOn(favoriteSongsAPI, 'getFavoriteSongs');

      renderPath('/album/123');

      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 2s infinite linear');
      }, { timeout: 3000 });

      userEvent.click(screen.getByTestId('checkbox-music-12'));
      expect(screen.getByTestId('unchecked-star-12').style.animation).toEqual('rotation 2s infinite linear');

      expect(spy).toHaveBeenCalled();
    });



  it('Será validado se o número de checkboxes estrela marcados como checked aumenta quando um checkbox estrela é clicado',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      

      renderPath('/album/123');

      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 2s infinite linear');
      }, { timeout: 3000 });

      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(0);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(4);

      userEvent.click(screen.getByTestId('checkbox-music-12'));
      expect(screen.getByTestId('unchecked-star-12').style.animation).toEqual('rotation 2s infinite linear');
      
      await waitFor(() => {
        expect(screen.getByTestId('checked-star-12')).toBeInTheDocument();
      }, { timeout: 3000 });

      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(1);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(3);

      userEvent.click(screen.getByTestId('checkbox-music-31'));
      expect(screen.getByTestId('unchecked-star-31').style.animation).toEqual('rotation 2s infinite linear');

      await waitFor(() => {
        expect(screen.getByTestId('checked-star-31')).toBeInTheDocument();
      }, { timeout: 3000 });

      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(2);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(2);

    });
});
