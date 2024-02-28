import { useContext, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { UserContext } from "../../providers/User.context";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/Header/MenuMobile";

export const HomePage = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const { user } = useContext(UserContext);
  return (
    <>
      <Header setOpenMobile={setOpenMobile} openMobile={openMobile} />;
      {openMobile ? <MenuMobile /> : null}
      <main>{user ? <NavBar /> : null}</main>
    </>
  );
};
