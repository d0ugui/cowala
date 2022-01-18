import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    margin-top: 20px;
    background: #333;

    p {
      font-weight: 500;
      color: #fff;
      padding: 5px 5px;
    }
  }

  ul {
    display: flex;
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
  }

  span {
    color: red;
    font-size: 24px;
    margin-top: 20px;
  }
`;