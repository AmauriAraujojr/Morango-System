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
    opacity: 95%;
    width: 100%;
    background-color: var(--color-brand4);
    color:var(--color-grey-10);
    padding:40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:50px;
    .atention{
      color: var(--color-brand2)
    }
    .button_box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex-direction: column;
      
    }
    @media(min-width: 790px){
      max-width:80%;
      .button_box{
        flex-direction: row;
      }
    }

  }
`;
