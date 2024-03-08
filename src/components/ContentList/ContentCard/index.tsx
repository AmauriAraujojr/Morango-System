import { ContentContext, Idata } from "../../../providers/ContentContext";
import { StyledBigButton } from "../../../styles/buttons";
import { StyledContainer } from "../../../styles/grid";
import {
  BodyOne400,
  BodyTwo400,
  ButtonBigText,
  HeadingFour600,
  HeadingSix600,
} from "../../../styles/typhography";
import { CotaCard } from "../../InfoSection/CotaCard";
import { StyledContentCard } from "./style";
import { useContext } from "react";

interface ICardProps {
  iten: Idata;
}
export const ContentCard = ({ iten }: ICardProps) => {
  const { getContentAndGoToAbout } = useContext(ContentContext);

  return (
    <>
      {iten.id != "2" ? (
        <StyledContentCard>
          <StyledContainer>
            <div className="box_img">
              <img src={iten.image} alt="Imagem" />
            </div>
            <div className="content_box">
              <HeadingFour600>{iten.title}</HeadingFour600>
              <BodyOne400>{iten.context}</BodyOne400>

              <StyledBigButton
                color="outline2"
                onClick={() => getContentAndGoToAbout(iten)}
              >
                <ButtonBigText>Saiba mais</ButtonBigText>
              </StyledBigButton>
            </div>
          </StyledContainer>
        </StyledContentCard>
      ) : (
        <StyledContentCard className="invert">
          <StyledContainer>
            <div className="content_box">
              <HeadingFour600>{iten.title}</HeadingFour600>
              <BodyOne400>{iten.introduction}</BodyOne400>
              <CotaCard />
            </div>
            <div className="box_img">
              <img src={iten.image} alt="Imagem" />
            </div>
          </StyledContainer>
        </StyledContentCard>
      )}
    </>
  );
};
