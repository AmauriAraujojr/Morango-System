import styled from "styled-components";

export const StyledInfos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding:10px;
  .flexBox{
    display: flex;
    align-items: center;
  flex-direction:column;
  justify-content: center;
  width: 100%;
  gap:2px;



  }
  @media (min-width: 755px) {

    .flexBox {
      display: flex;
      justify-content: center;
      flex-direction:row;
    }
  }
`;
