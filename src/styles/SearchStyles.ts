import styled from 'styled-components';

export const SearchWrapper = styled.div`
  padding-top: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  color: #FFFFFF;
  background: rgba(200, 129, 248, 0.9);
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  background: #B250B0;
  box-shadow: 0px 0px 4px #CE8DF2;
  border-radius: 0px;
  
  &:disabled {
    background-color: #CE8DF2;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #B250B0;
  }
`;