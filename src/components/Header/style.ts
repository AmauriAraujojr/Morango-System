import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-brand1);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-brand2);
  width: 100vw;
  max-width:100vw;
  height:80px;
 
  .flexBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    .controls {
      display: none;
    }
    .menuHamburguer {
      color: var(--color-brand2);
    }

    @media (min-width: 640px) {
      .controls {
        display: flex;
      }
      .menuHamburguer {
        display: none;
      }
    }
  }
`;
