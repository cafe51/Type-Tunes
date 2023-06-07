import React from 'react';
import { SearchFormProps } from '../../types';


export default class SearchForm extends React.Component<SearchFormProps> {

  render() {
    const { artistName, handleChange, handleClick, disabled }  = this.props;
    return (
      <form>
        <label htmlFor="searchField">
          <input
            data-testid="search-artist-input"
            name="artistName"
            type="text"
            id="searchField"
            placeholder="Pesquisar"
            value={ artistName }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ disabled }
          onClick={ handleClick }
        >
      Procurar
        </button>
      </form>
    );
  }
}
