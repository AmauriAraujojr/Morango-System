import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../fragments/Input";
import { StyledBigButton } from "../../styles/buttons";
import { ButtonBigText } from "../../styles/typhography";
import { ServiceContext } from "../../providers/ServicesContext";

export interface IFormData {
  time: number;
}
export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const {setActive}=useContext(ServiceContext)

  useEffect(() => {
    if (timer === 0) {
      setActive(false)
      return;
    } else {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);

      
    }
    
  }, [timer]);

  const { register, handleSubmit } = useForm<IFormData>({});

  const submit: SubmitHandler<IFormData> = (formData) => {
    setTimer(Number(formData.time) * 60);

    setActive(true)

  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input type="number" {...register("time")} />

        <StyledBigButton color="outline2">
          <ButtonBigText>Ativar</ButtonBigText>
        </StyledBigButton>
      </form>
      <span>{String(minutes).padStart(2, "0")}</span>:
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
};
