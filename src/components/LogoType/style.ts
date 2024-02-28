import styled from "styled-components";

export const StyledLogoType = styled.section`
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: var(--color-brand4);
  padding: 30px;
  height: 25vh;
  .ring {
    display: flex;
    align-items: center;
    gap: 5px;
    height:20%;

    h2 {
      color: var(--color-brand2);
      font-family: "Anta", sans-serif;
      font-weight: 400;
    }
    .fig {
      font-size: 35px;
      color: var(--color-brand2);
    }
  }
`;
