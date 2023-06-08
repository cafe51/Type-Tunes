import React from 'react';
import { SearchFormProps } from '../../types';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  /* background-color: pink; */
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }
`;

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
        <Button
          data-testid="search-artist-button"
          type="button"
          disabled={ disabled }
          onClick={ handleClick }
        >
          Procurar
        </Button>
      </Form>
    );
  }
}
