import styled from "styled-components";

export const StyledInfos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color:var(--color-brand1);
  .flexBox {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    width: 100%;
  }
  @media (min-width: 755px) {
    .flexBox {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  }
`;
