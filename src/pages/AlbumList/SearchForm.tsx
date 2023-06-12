import React from 'react';
import { SearchFormProps } from '../../types';
import { Form, Input, InputWrapper } from '../../styles/SearchStyles';


export default class SearchForm extends React.Component<SearchFormProps> {
  render() {
    const { artistNameInput, handleChange, handleClick, disabled }  = this.props;
    return (
      <Form>
        <InputWrapper>
          <label htmlFor="searchField">
            <Input
              data-testid="search-artist-input"
              name="artistNameInput"
              type="text"
              id="searchField"
              placeholder="Pesquisar"
              value={ artistNameInput }
              onChange={ handleChange }
            />
          </label>
        </InputWrapper>
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ disabled }
          onClick={ handleClick }
        >
          Procurar
        </button>
      </Form>
    );
  }
}
