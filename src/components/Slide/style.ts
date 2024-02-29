import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  z-index: 0;
  height:65vh;

  .slide {
    position:relative;
    
  }
  .info_box{
    background-color: var(--color-brand4);
    position: absolute;
    right: 170px;
    top: 170px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    gap:10px;
    padding: 30px;
    opacity:50%;
    color:var(--color-grey-10)


  }

  .slide-item {
    width: 100%;
    height: 630px;
    object-fit: cover;
  }
`;
