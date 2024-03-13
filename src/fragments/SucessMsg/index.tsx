import { useContext } from "react";
import { BodyOne400 } from "../../styles/typhography";
import { ServiceContext } from "../../providers/ServicesContext";
import { StyledSucessMsg } from "./style";

export const SucessMsg = () => {
  const { active } = useContext(ServiceContext);

  return (
    <StyledSucessMsg>
      {active ? (
        <BodyOne400>Sistema de irrigação ativado </BodyOne400>
      ) : (
        <BodyOne400 className="deactivate">
          Sistema de irrigação desativado{" "}
        </BodyOne400>
      )}
    </StyledSucessMsg>
  );
};
