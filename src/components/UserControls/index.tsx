import { Link, useNavigate} from "react-router-dom";
import { BodyOne600 } from "../../styles/typhography";
import { StyledUserControls } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/User.context";
import { LoginForm } from "../Forms/LoginForm";

export const UserControls = () => {
  const { userLogout, setOpenMenu, user } = useContext(UserContext);

  const logoutAndCloseMenu = () => {
    userLogout();
    setOpenMenu(false);
  };

  const navigate=useNavigate()

  const backToHome=()=>{

    setOpenMenu(false)
    navigate('/')
  }
  return (
    <StyledUserControls>
      <div role="dialog" className="modal">
        {user ? (
          <ul>
            <li>
              <Link to="/systempage">
                <BodyOne600 className="text"> Irrigações</BodyOne600>
              </Link>
            </li>
            <li>
              <li>
                <BodyOne600 className="text" onClick={() => backToHome()}>
                  {" "}
                  Cotação em tempo real
                </BodyOne600>
              </li>
            </li>
            <li>
              <Link to="#">
                <BodyOne600 className="text"> Compra</BodyOne600>
              </Link>
            </li>
            <li>
              <Link to="#">
                <BodyOne600 className="text">Venda</BodyOne600>
              </Link>
            </li>
            <li>
              <button onClick={() => logoutAndCloseMenu()}>
                <BodyOne600 className="text">Sair</BodyOne600>
              </button>
            </li>
          </ul>
        ) : (
          <LoginForm />
        )}
      </div>
    </StyledUserControls>
  );
};
