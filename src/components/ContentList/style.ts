import styled from "styled-components";

export const StyledContentList = styled.section`
  display: none;
  flex-direction: column;
  color: var(--color-grey-2);
  width: 100%;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px;

  ul {
    gap: 20px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    display: flex;
  }
`;
