import { GiStrawberry } from "react-icons/gi";
import { StyledContainer } from "../../styles/grid";
import { Styledfooter } from "./style";
import { BodyTwo500, HeadingSeven600 } from "../../styles/typhography";

export const Footer = () => {
  return (
    <Styledfooter>
      <StyledContainer>
        <div className="flexBox">
        <div className="nav">
          <a href="#header"><BodyTwo500>| Home</BodyTwo500></a>
          <a href="#"><BodyTwo500>| Sobre nós</BodyTwo500></a>
          <a href="#"><BodyTwo500>| Suporte</BodyTwo500></a>
          <a href="#"><BodyTwo500>| Contato</BodyTwo500></a>

          </div>

          <div className="logo_box">
            <h2>Cultivo </h2> <GiStrawberry className="logo" />
            <h2>Inteligente</h2>
          </div>
          <HeadingSeven600>2024 © CULTIVO INTELIGENTE. Todos os direitos reservados.</HeadingSeven600>
       
        </div>
      </StyledContainer>
    </Styledfooter>
  );
};
