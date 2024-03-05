import { useContext } from "react";
import {
  BodyOne600,
  ButtonMediumText,
  HeadingSix600,
} from "../../../styles/typhography";
import { ContentContext } from "../../../providers/ContentContext";
import { StyledCotaCard } from "./styled";
import { UserContext } from "../../../providers/User.context";
import { StyledMediunButton } from "../../../styles/buttons";

export const CotaCard = () => {
  const { date } = useContext(ContentContext);
  const { user } = useContext(UserContext);

  return (
    <StyledCotaCard>
      <div className="title_box">
        <HeadingSix600>Cotação do Morango em: {date}</HeadingSix600>
      </div>
      <div className="cota_box">
        <BodyOne600>Morango Novo: R$: 15,00</BodyOne600>
        <BodyOne600>Morango Velho: R$: 12,00</BodyOne600>
        <BodyOne600>Morango Foundue: R$: 22,00</BodyOne600>
      </div>
      {user ? (
        <div className="button_box">
          <StyledMediunButton color="sucess">
            <ButtonMediumText>Comprar</ButtonMediumText>
          </StyledMediunButton>
          <StyledMediunButton color="sucess">
            <ButtonMediumText>Vender</ButtonMediumText>
          </StyledMediunButton>
        </div>
      ) : null}
    </StyledCotaCard>
  );
};
