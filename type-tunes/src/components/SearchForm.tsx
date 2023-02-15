import React from 'react';

type SearchFormProps = {
  artistName: string;
  handleChange: any;
  handleClick: any;
  disabled: boolean;
}

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
