import styled from 'styled-components';

export default styled.button`
  height: 44px;
  border: none;
  border-radius: 4px;
  background-color: #0A1633;

  color: #fff;
  font-size: 18px;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(0.8);
  }
`;