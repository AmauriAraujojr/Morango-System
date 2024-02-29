import { useContext, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { UserContext } from "../../providers/User.context";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/Header/MenuMobile";
import { Slider } from "../../components/Slide";

export const HomePage = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const { user, openMenu } = useContext(UserContext);
  return (
    <>
      <Header setOpenMobile={setOpenMobile} openMobile={openMobile} />;
      {openMobile ? <MenuMobile /> : null}
        {user && !openMenu ? <NavBar /> : null}
        <Slider />
    </>
  );
};
