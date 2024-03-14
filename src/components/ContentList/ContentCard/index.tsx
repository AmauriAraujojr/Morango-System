import { Idata } from "../../../providers/ContentContext";
import { StyledContainer } from "../../../styles/grid";
import {
  BodyOne400,
  HeadingFour600,
} from "../../../styles/typhography";
import { CotaCard } from "../../InfoSection/CotaCard";
import { StyledContentCard } from "./style";

interface ICardProps {
  iten: Idata;
}
export const ContentCard = ({ iten }: ICardProps) => {
  return (
    <>
      {iten.id != "2" ? (
        <StyledContentCard>
          <StyledContainer>
            <div className="box_img">
              <img src={iten.image} alt="Imagem" />
            </div>
            <div className="content_box">
              <HeadingFour600 className="title">{iten.title}</HeadingFour600>
              <BodyOne400 className="parag">{iten.context}</BodyOne400>
            </div>
          </StyledContainer>
        </StyledContentCard>
      ) : (
        <StyledContentCard className="invert">
          <StyledContainer>
            <div className="content_box">
              <HeadingFour600 className="title">{iten.title}</HeadingFour600>
              <BodyOne400 className="parag">{iten.introduction}</BodyOne400>
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
