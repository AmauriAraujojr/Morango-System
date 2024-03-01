import styled from "styled-components";

export const StyledContentList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--color-grey-2);
  max-width: 100%;

  .carrocel {
    overflow: auto;
    overflow-y: hidden;
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
  }
  @media (min-width: 1000px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 48px;
      width: 100%;
      padding: 0;
    }
    .carrocel {
      overflow: hidden;
      overflow-y: hidden;
    }
  }
  @media (min-width: 1500px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
      width: 100%;
    }
  }
`;
