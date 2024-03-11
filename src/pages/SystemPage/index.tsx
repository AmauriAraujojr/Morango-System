import { Header } from "../../components/Header";
import { IrrigList } from "../../components/IrrigList";
import { SystemContent } from "../../components/SystemContent";

export const SystemPage = () => {
  return (
    <div className="system_page">
      <Header />
      <SystemContent/>
      <IrrigList/>
    </div>
  );
};
