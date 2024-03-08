import { StyledContainer } from "../../styles/grid";
import { HeaderControls } from "./HeaderControls";
import { StyledHeader } from "./style";
import { LogoType } from "../../fragments/Logo";

export const Header = () => {
  return (
    <StyledHeader id="header">
      <StyledContainer>
        <div className="flexBox">
          <LogoType />

          <HeaderControls />
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
