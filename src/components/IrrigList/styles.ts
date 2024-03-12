import styled from "styled-components";

export const StyledIrrigList = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: var(--color-brand1);
  ul {
    display: grid;
    gap: 20px;
    @media (min-width: 580px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 870px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1170px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1452px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  .pageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-direction: column;

    .pageNumber {
      text-align: center;
      display: flex;
      gap: 5px;
      color: var(--color-brand2);

      .pageNumberOpacity {
        opacity: 50%;
      }
    }

    .perPageH1 {
      color: var(--color-brand3);
    }
  }
  .not {
    max-width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;
