import { useContext } from "react";
import { StyledContainer } from "../../styles/grid";
import { StyledContentList } from "./style";
import { ContentContext } from "../../providers/ContentContext";
import { ContentCard } from "./ContentCard";
import { HeadingFour600 } from "../../styles/typhography";

export const ContentList = () => {
  const { data } = useContext(ContentContext);

  return (
    <StyledContainer>
      <StyledContentList>
        <HeadingFour600>Pricipais Serviços</HeadingFour600>
        <div className="carrocel">
          <ul>
            {data.map((iten) => (
              <ContentCard key={iten.id} iten={iten} />
            ))}
          </ul>
        </div>
        
      </StyledContentList>
    </StyledContainer>
  );
};
