import styled from "styled-components";

export const StyledContentList = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap:20px;
  color:var(--color-grey-2);
  /* margin-top:50px; */

  .carrocel {
    overflow-x: auto;
    overflow-y: hidden;
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
