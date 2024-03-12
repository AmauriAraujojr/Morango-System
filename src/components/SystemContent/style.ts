import styled from "styled-components";

export const StyledSystemContent = styled.div`
  background-color: var(--color-brand1);
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .flexBox {
    width: 100%;
    display: flex;
    color: var(--color-grey-10);
    align-items: center;
    height: 450px;
    justify-content:space-between;
    .content {
      margin-top: 100px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      max-width: 100%;
      position: relative;
      button {
        position: absolute;
        bottom: 0px;
        right: 0px;
      }
    }
  }

  @media (min-width: 455px) {
    .content {
      margin-top: 0px;
    }
  }
`;
