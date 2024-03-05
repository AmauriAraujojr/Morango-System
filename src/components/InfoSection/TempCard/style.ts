import styled from "styled-components";

export const StyledTemcard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand4);
  padding: 10px;
  width: 500px;
  opacity: 85%;
  max-width:50%;

  color: var(--color-grey-6);
  li {
    list-style: none;
  }
  gap: 20px;
  text-transform:capitalize;

  .title_box {
    display: flex;
    gap: 5px;
    align-items: center;

    .location_icon {
      color: var(--color-brand2);
    }
  }

  .img_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 100px;
    object-fit: cover;
  }

  .ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    .max_min {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  .box_description {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .data{
    text-align:center
  }
`;
