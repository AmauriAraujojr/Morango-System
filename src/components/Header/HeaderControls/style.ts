import styled from "styled-components";

export const StyledHeaderControls = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* background-color: var(--color-brand1); */
  position: relative;

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
