import React from 'react';
import { SearchFormProps } from '../../types';
import { Form, InputWrapper } from '../../styles/SearchStyles';


export default class SearchForm extends React.Component<SearchFormProps> {
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.handleClick();
  };

  render() {
    const { artistNameInput, handleChange, disabled }  = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputWrapper>
          <label htmlFor="searchField">
            <input
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
          type="submit"
          disabled={ disabled }
        >
          Procurar
        </button>
      </Form>
    );
  }
}