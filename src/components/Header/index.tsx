import { StyledContainer } from "../../styles/grid";
import { HeaderControls } from "./HeaderControls";
import { StyledHeader } from "./style";
import { GiStrawberry } from "react-icons/gi";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexBox">
          <div className="logo_box">
            <h2>Cultivo </h2> <GiStrawberry className="logo" />
            <h2>Inteligente</h2>
          </div>
        </div>

        <HeaderControls />
      </StyledContainer>
    </StyledHeader>
  );
};
