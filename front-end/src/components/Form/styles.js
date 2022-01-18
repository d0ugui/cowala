import styled, {css} from "styled-components";

export const ContentForm = styled.form`
  width: 100%;
  max-width: 541px;

  label {
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
    grid-template-columns: ${(minus) && '1fr 0.57fr'};
  `};
`;

export const LabelField = styled.label`
  display: flex;
  flex-direction: column;

  ${({ btn }) => css`
    justify-content: ${(btn) && 'flex-end'};
  `};

  button {
    background: #00D9D0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;

  button {
    padding: 12px 37px;

    & + button {
      margin-left: 33px;
    }
  }
`;
