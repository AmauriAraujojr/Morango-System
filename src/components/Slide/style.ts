import styled from "styled-components";

export const StyledSlider = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  z-index: 0;
  background-color: var(--color-brand1);

  .slide {
    position: relative;
  }
  .info_box {
    background-color: var(--color-brand4);
    position: absolute;
    right: 170px;
    bottom: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 30px;
    opacity: 50%;
    color: var(--color-grey-10);
  }
  @media (max-width: 800px) {
    .info_box {
      height: 100%;
      width: 100%;
      right: 0px;
      top: 0px;
      justify-content: space-around;
    }
  }

  .slide-item {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .down_div {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .down {
    font-size: 4rem;
    color: var(--color-brand2);
  }
`;
