import { useContext } from "react";
import { Idata } from "../../../providers/ContentContext";
import { StyledContainer } from "../../../styles/grid";
import {
  BodyOne400,
  HeadingFour600,
} from "../../../styles/typhography";
import { CotaCard } from "../../InfoSection/CotaCard";
import { StyledContentCard } from "./style";
import { UserContext } from "../../../providers/User.context";

interface ICardProps {
  iten: Idata;
}
export const ContentCard = ({ iten }: ICardProps) => {
  const { user } = useContext(UserContext);
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
