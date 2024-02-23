import { StyledContainer } from "../../styles/grid"
import { HeaderControls } from "./HeaderControls"
import { StyledHeader } from "./style"

export const Header=()=>{


    return(

       <StyledHeader>
        <StyledContainer>
            <div className="flexBox">
                <h1>MorangoIrrigation</h1>
            </div>
           
          <HeaderControls/>
        </StyledContainer>
       </StyledHeader>
    )
}