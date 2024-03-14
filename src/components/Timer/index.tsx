import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../fragments/Input";
import { StyledBigButton } from "../../styles/buttons";
import { ButtonBigText, HeadingThree600 } from "../../styles/typhography";
import { ServiceContext } from "../../providers/ServicesContext";
import { StyledTimer } from "./styled";

export interface IFormData {
  time: number;
}
export const Timer = () => {
  const {
    setActive,
    timer,
    setTimer,
    active,
    turnOnIrrigations,
    turnOffIrrigations,
  } = useContext(ServiceContext);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const getTime = () => {
    if (timer === 0) {
      setActive(false);
      turnOffIrrigations();
      return;
    } else {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  };
  useEffect(() => {
    if (!active) {
      setTimer(0);
      return;
    }

    getTime();
  }, [timer, active]);

  const { register, handleSubmit } = useForm<IFormData>({});

  const submit: SubmitHandler<IFormData> = (formData) => {
    turnOnIrrigations(formData);
  };

  return (
    <StyledTimer>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="number"
          {...register("time")}
          className="timer_input"
          placeholder="1"
        />

        <StyledBigButton color="outline2">
          <ButtonBigText>Ativar</ButtonBigText>
        </StyledBigButton>
      </form>

      {active ? (
        <HeadingThree600 className="time">
          {String(minutes).padStart(2, "0")} :{" "}
          {String(seconds).padStart(2, "0")}
        </HeadingThree600>
      ) : null}
    </StyledTimer>
  );
};
