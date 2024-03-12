import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  .modal {
    opacity: 85%;
    width: 80%;
    background-color: var(--color-brand4);
    color:var(--color-grey-10);
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:50px;
    .atention{
      color: var(--color-brand2)
    }
    .button_box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
