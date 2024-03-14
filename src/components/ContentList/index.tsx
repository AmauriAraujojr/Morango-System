import { useContext } from "react";
import { StyledContentList } from "./style";
import { ContentContext } from "../../providers/ContentContext";
import { ContentCard } from "./ContentCard";

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
