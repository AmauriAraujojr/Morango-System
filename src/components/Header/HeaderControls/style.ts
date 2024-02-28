import styled from "styled-components";

export const StyledHeaderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid var(--color-grey-6);
  padding: 10px;
  height: 50px;
  background-color: var(--color-brand1);
  border-right: 2px solid var(--color-grey-6);
  position:relative;
  /* width: */

  .controls_box {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .farmer {
      color: var(--color-brand2);
      font-size: 3rem;
    }
    .welcome {
      color: var(--color-grey-6);
    }
    .username {
      color: var(--color-brand2);
    }
  }
`;
