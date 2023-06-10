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
  height: 46px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;


color: #FFFFFF;
  background: rgba(200, 129, 248, 0.9);
  border-radius: 8px;

`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  background: #B250B0;
  box-shadow: 0px 0px 4px #CE8DF2;
  border-radius: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  
  &:disabled {
    background-color: #CE8DF2;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #B250B0;
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
