import Logo from "../../assets/img/logotipo.png";
import { StyledLogo } from "./style";

export const LogoType=()=>{

    return(
        <StyledLogo>
            <img src={Logo} />
            <h2>Cultivo </h2>
            <h2>Inteligente</h2>
          </StyledLogo>
    )
}