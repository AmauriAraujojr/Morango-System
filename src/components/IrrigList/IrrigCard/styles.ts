import styled from "styled-components";

export const StyledIrrigCard = styled.li`
  width: 270px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand1);
  justify-content: space-between;
  color: var(--color-grey-10);
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--color-brand2);
  box-shadow: 1px 1px 2px 2px var(--color-brand2);
  .date_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
