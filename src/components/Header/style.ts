import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-brand1);
  display: flex;
  align-items: center;
  border-bottom: 3px solid var(--color-brand2);
  width: 100%;

  .flexBox {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;

    .logo_box {
      display: flex;
      align-items: center;
      gap: 5px;
      h2 {
        color: var(--color-brand2);
        font-family: "Anta", sans-serif;
        font-weight: 400;
      }
      .logo {
        font-size: 35px;
        color: var(--color-brand2);
      }
    }
  }
`;
