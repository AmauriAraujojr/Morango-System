import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/User.context";
import { StyledHeaderControls } from "./style";

export const HeaderControls = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <StyledHeaderControls>
      {user ? (
        <h3>Bem Vindo {user?.username}</h3>
      ) : (
        <div>
          <button onClick={() => navigate("/login")}>Login</button>

          <button>Register</button>
        </div>
      )}
    </StyledHeaderControls>
  );
};
