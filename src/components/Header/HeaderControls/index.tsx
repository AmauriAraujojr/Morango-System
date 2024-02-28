import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/User.context";
import { StyledHeaderControls } from "./style";
import {

  HeadingSix600,
} from "../../../styles/typhography";
import { FaChevronDown } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { UserControls } from "../../UserControls";

export const HeaderControls = () => {
  const navigate = useNavigate();

  const { user,openMenu,setOpenMenu} = useContext(UserContext);
  useEffect(() => {}, [user]);


  return (
    <StyledHeaderControls className="controls">
      {user ? (
        <div className="controls_box">
          <HeadingSix600 className="welcome">Olá!</HeadingSix600>
          <HeadingSix600 className="username">{user?.username}</HeadingSix600>
          <FaChevronDown className="welcome" onClick={()=>setOpenMenu(!openMenu)} />
        </div>
      ) : (
        <div className="controls_box">
          <GiFarmer className="farmer" />
          <HeadingSix600 className="welcome">
            Acesse sua conta AQUI
          </HeadingSix600>
          <FaChevronDown className="welcome" onClick={()=>setOpenMenu(!openMenu)}/>
        </div>
      )}
      {openMenu ? <UserControls /> : null}
    </StyledHeaderControls>
  );
};
