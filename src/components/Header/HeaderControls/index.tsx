import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/User.context";
import { StyledHeaderControls } from "./style";
import { StyledBigButton } from "../../../styles/buttons";
import { ButtonBigText } from "../../../styles/typhography";

export const HeaderControls = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <StyledHeaderControls>
      {user ? (
        <h3>Bem Vindo {user?.username}</h3>
      ) : (
        <div className="controls_box">
          <StyledBigButton color="outline2" onClick={() => navigate("/login")}><ButtonBigText>Entrar</ButtonBigText></StyledBigButton >

          <StyledBigButton color="outline2"><ButtonBigText>Cadastrar</ButtonBigText></StyledBigButton>
        </div>
      )}
    </StyledHeaderControls>
  );
};
