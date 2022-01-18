import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1103px; 
  height: 459px;
  margin: 0 auto;
  background-color: #EDEDED;
  margin-top: 100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 541px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 33px;
  margin-top: 20px;

  ${({ minus }) => css`
  grid-template-columns: ${(minus) && '1fr 0.50fr'};
  `};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  ${({ btn }) => css`
    justify-content: ${(btn) && 'flex-end'};
  `};

  button {
    height: 44px;
    background: #00D9D0;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border-radius: 4px;
    font-size: 18px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  button + button {
    margin-left: 33px;
  }
`;
