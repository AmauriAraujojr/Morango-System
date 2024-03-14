import { StyledContainer } from "../../styles/grid";
import { CotaCard } from "./CotaCard";
import { TempCard } from "./TempCard";
import { StyledInfos } from "./style";

export const InfoSection = () => {
  return (
    <StyledInfos>
      <StyledContainer>
        <div className="flexBox">
          <TempCard />
          <CotaCard />
        </div>
      </StyledContainer>
    </StyledInfos>
  );
};
