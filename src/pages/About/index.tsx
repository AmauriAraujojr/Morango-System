import { useContext } from "react";
import { ContentContext } from "../../providers/ContentContext";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/Header/MenuMobile";
import { UserContext } from "../../providers/User.context";

export const About = () => {
  const { currentContent } = useContext(ContentContext);
  const {openMobile}=useContext(UserContext)
  return (
    <div>
      <Header/>
      {openMobile ? <MenuMobile /> : null}
      <p>{currentContent?.title}</p>
      <Footer/>
    </div>
  );
};
