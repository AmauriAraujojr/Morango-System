import { GiStrawberry } from "react-icons/gi";
import { StyledLogoType } from "./style";
import { StyledContainer } from "../../styles/grid";
import { HeadingOne700 } from "../../styles/typhography";

export const LogoType = () => {
  return (
    <StyledContainer>
      <StyledLogoType>
        <div className="ring">
          <h2>Cultivo </h2>
         <HeadingOne700><GiStrawberry className="fig" /></HeadingOne700>
          <h2>Inteligente</h2>
        </div>
      </StyledLogoType>
    </StyledContainer>
  );
};
