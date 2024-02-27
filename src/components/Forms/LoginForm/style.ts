import styled from "styled-components";

export const StyledFormLogin = styled.div`
  background-color: var(--color-grey-10);
  width: 343px;
  max-width: 90%;
  border-radius: 4px;
  padding: 44px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* .esqueci {
      color: var(--color-grey-2);
      align-self: flex-end;
      cursor: pointer;
    }
    .notAcount {
      color: var(--color-grey-2);
      align-self: center;
    } */
    button {
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    padding: 44px 48px;
    width: 412px;
  }
`;
