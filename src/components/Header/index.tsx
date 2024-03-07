import { useContext } from "react";
import { StyledContainer } from "../../styles/grid";
import { HeadingFive600 } from "../../styles/typhography";
import { HeaderControls } from "./HeaderControls";
import { StyledHeader } from "./style";
import { GiStrawberry } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../../providers/User.context";



export const Header = () => {

  const{openMobile,setOpenMobile}=useContext(UserContext)
  return (
    <StyledHeader id="header">
      <StyledContainer>
        <div className="flexBox">
          <div className="logo_box">
            <h2>Cultivo </h2> <GiStrawberry className="logo" />
            <h2>Inteligente</h2>
          </div>

          <HeaderControls />
          <HeadingFive600
            className="menuHamburguer"
            onClick={() => setOpenMobile(!openMobile)}
          >
            <RxHamburgerMenu />
          </HeadingFive600>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
