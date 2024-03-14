import { useContext } from "react";
import { StyledBigButton } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";
import { ButtonBigText, HeadingFive600, HeadingOne700} from "../../styles/typhography";
import { ImgContainer } from "../ImgContainer";
import { StyledSystemContent } from "./style";
import { ServiceContext } from "../../providers/ServicesContext";

export const SystemContent = () => {

  const{setOpenModal}=useContext(ServiceContext)

  
  return (
    <StyledSystemContent>
      <StyledContainer>
       
        <div className="flexBox">
            <div className="content">

            <HeadingOne700> Bem vindo a Irrigação Inteligente</HeadingOne700>
            <HeadingFive600>A hidratação de sua lavoura a um "CLICK" de distância!</HeadingFive600>
            <StyledBigButton color="outline2" onClick={()=>setOpenModal(true)}><ButtonBigText>Começar</ButtonBigText></StyledBigButton>
            </div>
            <ImgContainer/>


        </div>
      </StyledContainer>
    </StyledSystemContent>
  );
};
