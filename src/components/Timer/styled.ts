import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 55%;
  justify-content: space-between;
  flex-direction: column;
  form {
    display: flex;
    padding: 10px;
    width: 280px;
    .timer_input {
      width: 60px;
      text-align: center;
    }
  }
  .time {
    color: var(--color-brand2);
  }
  @media (min-width: 980px) {
    flex-direction: row;
  }
`;
