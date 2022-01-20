import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  ul {
    width: 100%;
  }

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

  span {
    color: red;
    font-size: 24px;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    margin-top: 30px;
    transition: color 0.2s ease-in;

    &:hover {
      color: red;
    }
  }
`;