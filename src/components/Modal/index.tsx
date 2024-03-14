import { useContext } from "react";
import { StyledBigButton } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";
import {
  ButtonBigText,
  HeadingThree600,
  HeadingTwo600,
} from "../../styles/typhography";
import { StyledModal } from "./styled";
import { ServiceContext } from "../../providers/ServicesContext";
import { Timer } from "../Timer";
import { SucessMsg } from "../../fragments/SucessMsg";
import { TempCard } from "../InfoSection/TempCard";

export const Modal = () => {
  const { setOpenModal, active, turnOffIrrigations } =
    useContext(ServiceContext);

  return (
    <StyledModal>
      <StyledContainer>
        <div role="dialog" className="modal">
          <HeadingTwo600 className="atention">Atenção !</HeadingTwo600>
          <HeadingThree600>
            Indique o tempo em "minutos" que a irrigação ficará ligada e clique
            em "Ativar"
          </HeadingThree600>
          <TempCard />
          <div className="button_box">
            <Timer />

            {active ? (
              <StyledBigButton
                color="alert"
                onClick={() => turnOffIrrigations()}
              >
                <ButtonBigText>Desativar</ButtonBigText>
              </StyledBigButton>
            ) : (
              <StyledBigButton
                color="alert"
                onClick={() => setOpenModal(false)}
              >
                <ButtonBigText>Fechar</ButtonBigText>
              </StyledBigButton>
            )}
          </div>
          <SucessMsg />
        </div>
      </StyledContainer>
    </StyledModal>
  );
};
