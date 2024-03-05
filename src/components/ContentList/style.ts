import styled from "styled-components";

export const StyledContentList = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-2);
  width: 100%;
  gap: 20px;
  align-items: center;
  .carrocel {
    overflow: auto;
    overflow-y: hidden;
    display: flex;
    max-width: 100%;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
`;
