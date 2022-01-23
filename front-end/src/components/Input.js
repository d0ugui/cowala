import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 44px;
  padding: 0 16px;

  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #fff;

  outline: none;
  font-size: 18px;
  color: #000000;

  margin-top: 5px;

  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid  #0A1633;
  }

  ${({ error }) => error && css`
    color: #FC5050;
    border-color: #FC5050 !important;
  `}
`;