import { StyledContainer } from "../../styles/grid";
import { Styledfooter } from "./style";
import { BodyTwo500, HeadingSeven600 } from "../../styles/typhography";
import { LogoType } from "../../fragments/Logo";
import { useContext } from "react";
import { ContentContext } from "../../providers/ContentContext";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const{setCurrentContent}=useContext(ContentContext)

  const navigate= useNavigate()

const goToAboutandSSetUndefined=()=>{
  setCurrentContent(undefined)
  navigate("/about")
}
  return (
    <Styledfooter>
      <StyledContainer>
        <div className="flexBox">
          <div className="nav">
            <a href="#header">
              <BodyTwo500>| Home</BodyTwo500>
            </a>
            <li onClick={()=>goToAboutandSSetUndefined()}>
              <BodyTwo500>| Sobre nós</BodyTwo500>
            </li>
            <a href="#">
              <BodyTwo500>| Suporte</BodyTwo500>
            </a>
            <a href="#">
              <BodyTwo500>| Contato</BodyTwo500>
            </a>
          </div>

          <LogoType />
          <HeadingSeven600>
            2024 © CULTIVO INTELIGENTE. Todos os direitos reservados.
          </HeadingSeven600>
        </div>
      </StyledContainer>
    </Styledfooter>
  );
};
