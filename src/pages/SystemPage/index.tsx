import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IrrigList } from "../../components/IrrigList";
import { SystemContent } from "../../components/SystemContent";
import { ServiceContext } from "../../providers/ServicesContext";
import { Modal } from "../../components/Modal";

export const SystemPage = () => {

  const {openModal}=useContext(ServiceContext)
  return (
    <div className="system_page">
      <Header />
      {openModal?<Modal/>:null}
      <SystemContent/>
      <IrrigList/>
      <Footer/>
    </div>
  );
};
