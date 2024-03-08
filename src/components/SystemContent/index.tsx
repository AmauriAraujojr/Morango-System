import { StyledBigButton } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";
import { ButtonBigText, HeadingFive600, HeadingOne700, HeadingTwo600 } from "../../styles/typhography";
import { StyledSystemContent } from "./style";

export const SystemContent = () => {
  return (
    <StyledSystemContent>
      <StyledContainer>
       
        <div className="flexBox">
            <div className="content">

            <HeadingOne700> Bem vindo a Irrigação Inteligente</HeadingOne700>
            <HeadingFive600>A hidratação de sua lavoura a um "CLICK" de distância!</HeadingFive600>
            <StyledBigButton color="outline2"><ButtonBigText>Começar</ButtonBigText></StyledBigButton>
            </div>


        </div>
      </StyledContainer>
    </StyledSystemContent>
  );
};
