import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1103px; 
  margin: 50px auto 0;  

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

  span {
    color: red;
    font-size: 24px;
    margin-top: 20px;
  }
`;