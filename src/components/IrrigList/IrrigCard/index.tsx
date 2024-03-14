import { useContext, useEffect, useState } from "react";
import { IService, ServiceContext } from "../../../providers/ServicesContext";
import { BodyTwo500 } from "../../../styles/typhography";
import { StyledIrrigCard } from "./styles";

interface IIrrigProps {
  service: IService;
}
export const IrrigCard = ({ service }: IIrrigProps) => {
  const [date, setDate] = useState("");
  const [on, setOn] = useState("");
  const [off, setOff] = useState("");
  const [duration, setDuration] = useState("");

  const getDate = () => {
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    let date = new Date(service.turnOn);
    let formatDate = `${date.getDate()} ${
      meses[date.getMonth()]
    } ${date.getFullYear()}`;

    setDate(formatDate);
    let hour = "";
    if (date.getHours() < 10) {
      hour = `0${date.getHours()}`;
    } else {
      hour = String(date.getHours());
    }

    let minutes = "";
    if (date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = String(date.getMinutes());
    }
    let hourOn = `${hour} : ${minutes} : ${date.getUTCSeconds()}`;

    setOn(hourOn);

    let dateOff = new Date(service.turnOff);

    let hourOff = "";
    let hourLocal = dateOff.getHours();

    if (hourLocal == 0) {
      hourLocal = 24;
    }
    if (hourLocal == 1) {
      hourLocal = 25;
    }
    if (hourLocal == 2) {
      hourLocal = 26;
    }

    let newHour = hourLocal - 3;

    if (newHour < 10) {
      hourOff = `0${newHour}`;
    } else {
      hourOff = String(newHour);
    }

    let minutesOff = "";
    if (dateOff.getMinutes() < 10) {
      minutesOff = `0${dateOff.getMinutes()}`;
    } else {
      minutesOff = String(dateOff.getMinutes());
    }
    let hourOffForm = `${hourOff} : ${minutesOff} : ${dateOff.getUTCSeconds()}`;
    setOff(hourOffForm);

    let diferenca = Math.abs(Number(dateOff) - Number(date));
    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);

    minutos %= 60;
    segundos %= 60;

    setDuration(minutos + " mim, " + Number(segundos + 1) + " seg");
  };

  const { getTimeSinceSystem } = useContext(ServiceContext);

  useEffect(() => {
    getDate();
  }, []);

  return (
    <StyledIrrigCard>
      <div className="date_box">
        <BodyTwo500>{date} </BodyTwo500>
        <BodyTwo500>{getTimeSinceSystem(service.turnOn)} </BodyTwo500>
      </div>

      <BodyTwo500>Ativada às: {on}</BodyTwo500>
      {service.turnOff ? <BodyTwo500>Desativada às: {off}</BodyTwo500> : null}
      <BodyTwo500>Duração: {duration}</BodyTwo500>
    </StyledIrrigCard>
  );
};
