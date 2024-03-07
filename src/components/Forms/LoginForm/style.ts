import styled from "styled-components";

export const StyledFormLogin = styled.div`
  /* background-color: var(--color-grey-10); */
  max-width: 100%;
  border-radius: 4px;
  padding: 44px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  opacity: 60%;
  color:var(--color-grey-10);
  border:1px solid var(--color-brand2);
  .logo_box {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
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

  .text_center {
    text-align: center;
  }
  button {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
