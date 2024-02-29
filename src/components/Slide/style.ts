import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  z-index: 0;
  .slide {
    height: 580px;
    background-color: blue;
    position:relative;
    .box {
      background-color: green;
      height: 550px;

    }
  }
  p{
    position:absolute;
    top:50px;
    color:red;
    right:50px;
  }

  .slide-item {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
