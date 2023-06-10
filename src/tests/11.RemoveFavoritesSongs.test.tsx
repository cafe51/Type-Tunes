import { 
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as musicsAPI from '../services/musicsAPI';
import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import renderPath from './helpers/renderPath';
import { 
  defaultUser,
  musicAPIDefaultResponse,
  favoriteSongsList
} from './mocks';

describe('11 - Crie o mecanismo para remover músicas na lista de músicas favoritas', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify(favoriteSongsList));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a função removeSong é chamada quando algum checkbox estrela que já esteja marcado é clicado',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      const spy = jest.spyOn(favoriteSongsAPI, 'removeSong');

      renderPath('/album/12');

      await waitFor(() => {
        expect(screen.getByTestId('checked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });

      userEvent.click(screen.getByTestId('checked-star-12'));
      expect(screen.getByTestId('checked-star-12').style.animation).toEqual('rotation 0.5s infinite linear');

      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });

      expect(spy).toHaveBeenCalled();
    });

  it('Será validado se a mensagem Carregando... é exibida após clicar no checkbox estrela e removida depois do retorno da API',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath('/album/12');

      await waitFor(() => {
        expect(screen.getByTestId('checked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });

      userEvent.click(screen.getByTestId('checked-star-12'));
      expect(screen.getByTestId('checked-star-12').style.animation).toEqual('rotation 0.5s infinite linear');

      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });

      expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
    });

  it('Será validado se o número de checkboxes estrela marcados como checked diminui quando um checkbox estrela marcado é clicado',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath('/album/12');

      await waitFor(() => {
        expect(screen.getByTestId('checked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });


      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(2);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(2);

      userEvent.click(screen.getByTestId('checked-star-12'));
      expect(screen.getByTestId('checked-star-12').style.animation).toEqual('rotation 0.5s infinite linear');
      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });
      expect(screen.getByTestId('unchecked-star-12').style.animation).not.toEqual('rotation 0.5s infinite linear');

      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(1);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(3);

      userEvent.click(screen.getByTestId('checked-star-31'));
      expect(screen.getByTestId('checked-star-31').style.animation).toEqual('rotation 0.5s infinite linear');
      await waitFor(() => {
        expect(screen.getByTestId('unchecked-star-31').style.animation).not.toEqual('rotation 0.5s infinite linear');
      }, { timeout: 3000 });
      expect(screen.getByTestId('unchecked-star-31').style.animation).not.toEqual('rotation 0.5s infinite linear');

      expect(screen.queryAllByTestId(/^checked-star-/)).toHaveLength(0);
      expect(screen.queryAllByTestId(/^unchecked-star-/)).toHaveLength(4);
    });
});
