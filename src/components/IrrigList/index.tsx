import { useContext } from "react";
import { StyledContainer } from "../../styles/grid";
import { HeadingThree600 } from "../../styles/typhography";
import { IrrigCard } from "./IrrigCard";
import { StyledIrrigList } from "./styles";
import { UserContext } from "../../providers/User.context";

export const IrrigList = () => {

    const{user}=useContext(UserContext)
  return (
    <StyledContainer>
      <StyledIrrigList>
        <div>
          <HeadingThree600>Histórico de Irrigações</HeadingThree600>{" "}
        </div>
        <ul>
          {user?.services.map((service)=>{
            return <IrrigCard key={service.id} service={service} />
          })}
        </ul>
      </StyledIrrigList>
    </StyledContainer>
  );
};
