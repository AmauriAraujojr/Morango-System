import { StyledContainer } from "../../styles/grid";
import { StyledModal } from "./styled";

export const Modal = () => {
  return (
    <StyledModal>
      <StyledContainer>
        <div role="dialog" className="modal"></div>
      </StyledContainer>
    </StyledModal>
  );
};
