import { useContext } from "react";
import { ContentContext } from "../../providers/ContentContext";

export const About = () => {
  const { currentContent } = useContext(ContentContext);
  return (
    <div>
      <h1>Sobre</h1>
      <p>{currentContent?.title}</p>
    </div>
  );
};
