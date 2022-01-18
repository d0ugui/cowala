import styled, {css} from 'styled-components';

export default styled.input`
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  border: none;
  height: 44px;
  padding: 20px 20px;
  display: inline;
  font-size: 18px;
  color: #000000;
  

  ${(props) => css`
    width: ${props.fullWidth && '100%' }; 
    display: ${props.fullWidth && 'block' };
  `}
`;