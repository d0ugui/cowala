import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  h2 {
    font-size: 28px;
  }

  & > div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      background: #333;
      padding: 5px 10px;
      color: #fff;
      border-radius: 4px;
      margin-left: 10px;
    }
  }

  div:nth-child(2) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    margin-top: 20px;
    background: #333;
  }
  

  p {
    font-weight: 500;
    color: #fff;
    padding: 5px 5px;
  }
`;
