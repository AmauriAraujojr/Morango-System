import styled from "styled-components";

export const StyledContentCard = styled.div`
  width: 100vw;
  display: flex;

  .box_img {
    width: 40%;
    height: 100%;

    img {
      height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }

  .content_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 20px;
    color: var(--color-grey-2);
    width: 70%;
    gap: 20px;
    .title {
      text-transform: capitalize;
    }
    .parag{
      text-align: justify;
    }
  }
  
  `;
