import { useContext, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { UserContext } from "../../providers/User.context";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/Header/MenuMobile";
import { Slider } from "../../components/Slide";
import { ContentList } from "../../components/ContentList";
import { InfoSection } from "../../components/InfoSection";
import { Footer } from "../../components/Footer";

export const HomePage = () => {

  const { user, openMenu,openMobile } = useContext(UserContext);
  return (
    <div className="home">
      <Header />
      {openMobile ? <MenuMobile /> : null}
      {user && !openMenu ? <NavBar /> : null}
      <Slider />

      <InfoSection />

      <ContentList />

      <Footer></Footer>
    </div>
  );
};
