import { useContext } from "react";
import { ContentContext } from "../../providers/ContentContext";

export const About = () => {
  const { currentContent } = useContext(ContentContext);
  return (
    <div>
      {currentContent? <p>{currentContent?.title}</p>:<p>SobreNós</p>}
     
    </div>
  );
};
