import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: var(--color-brand4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: 75%;

  .modal {
    width: 100%;
    height: 600px;
    background-color: var(--color-brand2);
  }
`;
