import { useContext } from "react";
import { NavBar } from "../../components/NavBar";
import { UserContext } from "../../providers/User.context";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <main>{user ? <NavBar /> : null}</main>
    </>
  );
};
