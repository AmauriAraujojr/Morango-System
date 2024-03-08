import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-brand4);
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 193px;
  opacity: 95%;
  position: fixed;
  z-index: 1;
  opacity: 70%;
  .flexBox {
    flex-direction:column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media(min-width:685px){
    height: 113px;

    .flexBox{
      flex-direction: row;
      justify-content: space-between;

    }
  }
  `;
