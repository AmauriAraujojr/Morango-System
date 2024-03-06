import { Link } from "react-router-dom";
import { StyledContainer } from "../../styles/grid";
import { StyledNavBar } from "./sytles";
import { BodyOne600 } from "../../styles/typhography";

export const NavBar = () => {
  return (
    <StyledContainer>
      <StyledNavBar>
        <ul className="nav">
          <li>
            <Link to="/systempage">
              <BodyOne600>| Irrigações</BodyOne600>
            </Link>
          </li>
          <li>
            <a href="#cotaCard">
              <BodyOne600>| Cotação em tempo real</BodyOne600>
            </a>
          </li>
          <li>
            <Link to="#">
              <BodyOne600>| Compra</BodyOne600>
            </Link>
          </li>
          <li>
            <Link to="#">
              <BodyOne600>| Venda</BodyOne600>
            </Link>
          </li>
        </ul>
      </StyledNavBar>
    </StyledContainer>
  );
};
