import { useContext } from "react";
import { StyledContainer } from "../../styles/grid";
import { StyledContentList } from "./style";
import { ContentContext } from "../../providers/ContentContext";
import { ContentCard } from "./ContentCard";
import { HeadingFour600 } from "../../styles/typhography";

export const ContentList = () => {
  const { data } = useContext(ContentContext);

  return (
    <StyledContentList id="list">
      <ul>
        {data.map((iten) => (
          <ContentCard key={iten.id} iten={iten} />
        ))}
      </ul>
    </StyledContentList>
  );
};
