import { ContentContext, Idata } from "../../../providers/ContentContext";
import { StyledBigButton } from "../../../styles/buttons";
import {
  BodyTwo400,
  ButtonBigText,
  HeadingSix600,
} from "../../../styles/typhography";
import { StyledContentCard } from "./style";
import { useContext } from "react";

interface ICardProps {
  iten: Idata;
}
export const ContentCard = ({ iten }: ICardProps) => {
  const { getContentAndGoToAbout } = useContext(ContentContext);

  return (
    <StyledContentCard>
      <div className="box_img">
        <img src={iten.image} alt="Imagem" />
      </div>
      <div className="content_box">
        <HeadingSix600>{iten.title}</HeadingSix600>
        <BodyTwo400>{iten.introduction}</BodyTwo400>

        {iten.id != "2" ? (
          <StyledBigButton
            color="outline2"
            onClick={() => getContentAndGoToAbout(iten)}
          >
            <ButtonBigText>Saiba mais</ButtonBigText>
          </StyledBigButton>
        ) : null}
      </div>
    </StyledContentCard>
  );
};
