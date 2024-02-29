import styled from "styled-components";

export const StyledUserControls = styled.div`
  width: 350px;
  background-color: var(--color-brand4);
  position: absolute;
  top: 70px;
  opacity:80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .modal {
    width: 100%;
    height: 100%;
    padding: 20px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      a {
        text-decoration: none;
      }
    }
  }

  .text {
    color: var(--color-grey-6);
    &:hover {
            color: var(--color-brand2);
          }
  }
`;
