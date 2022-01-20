import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    li {
      width: 100%;
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      text-align: center;
      background: #EDEDED;
      padding: 5px 5px;
      border-radius: 4px;
    }
`;
