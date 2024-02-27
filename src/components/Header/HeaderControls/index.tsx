import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/User.context";
import { StyledHeaderControls } from "./style";
import {  StyledMediunButton } from "../../../styles/buttons";
import {   ButtonMediumText, HeadingSix600 } from "../../../styles/typhography";



export const HeaderControls = () => {
  const navigate = useNavigate();

  const { user,userLogout} = useContext(UserContext);
  useEffect(() => {}, [user]);

  

  return (
    <StyledHeaderControls className="controls">
      {user ? (
        <div className="controls_box">

          <HeadingSix600 className="welcome">Olá!</HeadingSix600>  
          <HeadingSix600 className="username">{user?.username}</HeadingSix600>
          <StyledMediunButton color="outline2" onClick={()=>userLogout()}><ButtonMediumText>Sair</ButtonMediumText></StyledMediunButton>
        </div>
      ) : (
        <div className="controls_box">
          <StyledMediunButton color="outline2" onClick={() => navigate("/login")}><ButtonMediumText>Entrar</ButtonMediumText></StyledMediunButton >

          <StyledMediunButton color="outline2"><ButtonMediumText>Cadastrar</ButtonMediumText></StyledMediunButton>
        </div>
      )}
    </StyledHeaderControls>
  );
};
