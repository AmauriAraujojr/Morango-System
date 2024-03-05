import styled from "styled-components";

export const StyledContentList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--color-grey-2);
  width: 100%;

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
  
      flex-wrap:wrap;
      justify-content:space-around;

    }
    .carrocel {
      overflow: hidden;
      overflow-y: hidden;
    }
  }
 
`;
